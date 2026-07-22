const MODE_CONFIGS = {
  ranking: { path: "rankingChallenges", label: "Classements" },
  guess: { path: "guessAnswers", label: "Devine ma réponse" },
  questions: { path: "questionsChallenges", label: "Questions" },
  likely: { path: "likelyChallenges", label: "Qui est le plus susceptible" },
  ok: { path: "okChallenges", label: "OK ou Pas OK" },
  greenFlag: { path: "greenFlagChallenges", label: "Green Flag / Red Flag" },
  princess: { path: "princessChallenges", label: "Princess Treatment" },
  wouldRather: { path: "wouldRatherChallenges", label: "Tu préfères ?" },
  threeYesNo: { path: "threeYesNoChallenges", label: "3 oui / 3 non" },
  limitReached: { path: "limitReachedChallenges", label: "Limite atteinte" },
  coupleDare: { path: "coupleDareChallenges", label: "Défis à deux" }
};

const OAUTH_SCOPES = [
  "https://www.googleapis.com/auth/firebase.messaging",
  "https://www.googleapis.com/auth/firebase.database",
  "https://www.googleapis.com/auth/userinfo.email"
].join(" ");

let cachedGoogleToken = null;
let cachedGoogleTokenExpiresAt = 0;

function corsHeaders() {
  return {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Authorization, Content-Type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Cache-Control": "no-store"
  };
}

function jsonResponse(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      ...corsHeaders(),
      "Content-Type": "application/json; charset=utf-8"
    }
  });
}

function base64Url(input) {
  const bytes = typeof input === "string" ? new TextEncoder().encode(input) : input;
  let binary = "";
  for (const byte of bytes) binary += String.fromCharCode(byte);
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}

function pemToArrayBuffer(pem) {
  const base64 = pem
    .replace(/-----BEGIN PRIVATE KEY-----/g, "")
    .replace(/-----END PRIVATE KEY-----/g, "")
    .replace(/\s+/g, "");
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i += 1) bytes[i] = binary.charCodeAt(i);
  return bytes.buffer;
}

async function getGoogleAccessToken(env) {
  const nowMs = Date.now();
  if (cachedGoogleToken && nowMs < cachedGoogleTokenExpiresAt - 60000) {
    return cachedGoogleToken;
  }

  if (!env.FIREBASE_SERVICE_ACCOUNT_JSON) {
    throw new Error("FIREBASE_SERVICE_ACCOUNT_JSON manque dans les secrets Cloudflare.");
  }

  const serviceAccount = JSON.parse(env.FIREBASE_SERVICE_ACCOUNT_JSON);
  const now = Math.floor(nowMs / 1000);
  const header = { alg: "RS256", typ: "JWT" };
  const payload = {
    iss: serviceAccount.client_email,
    scope: OAUTH_SCOPES,
    aud: "https://oauth2.googleapis.com/token",
    iat: now - 5,
    exp: now + 3600
  };

  const unsignedJwt = `${base64Url(JSON.stringify(header))}.${base64Url(JSON.stringify(payload))}`;
  const privateKey = await crypto.subtle.importKey(
    "pkcs8",
    pemToArrayBuffer(serviceAccount.private_key),
    { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const signature = await crypto.subtle.sign(
    "RSASSA-PKCS1-v1_5",
    privateKey,
    new TextEncoder().encode(unsignedJwt)
  );
  const assertion = `${unsignedJwt}.${base64Url(new Uint8Array(signature))}`;

  const response = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion
    })
  });

  const data = await response.json();
  if (!response.ok || !data.access_token) {
    throw new Error(`Impossible d'obtenir le jeton Google OAuth: ${JSON.stringify(data)}`);
  }

  cachedGoogleToken = data.access_token;
  cachedGoogleTokenExpiresAt = nowMs + Number(data.expires_in || 3600) * 1000;
  return cachedGoogleToken;
}

async function firebaseRequest(env, path, options = {}) {
  const accessToken = await getGoogleAccessToken(env);
  const baseUrl = String(env.FIREBASE_DATABASE_URL || "").replace(/\/$/, "");
  if (!baseUrl) throw new Error("FIREBASE_DATABASE_URL manque dans la configuration Cloudflare.");

  const method = options.method || "GET";
  const response = await fetch(`${baseUrl}/${path.replace(/^\//, "")}.json`, {
    method,
    headers: {
      "Authorization": `Bearer ${accessToken}`,
      "Content-Type": "application/json"
    },
    body: options.body === undefined ? undefined : JSON.stringify(options.body)
  });

  const text = await response.text();
  const data = text ? JSON.parse(text) : null;
  if (!response.ok) {
    throw new Error(`Realtime Database ${method} ${path}: ${response.status} ${text}`);
  }
  return data;
}

async function verifyFirebaseUser(request, env) {
  const authorization = request.headers.get("Authorization") || "";
  const match = authorization.match(/^Bearer\s+(.+)$/i);
  if (!match) throw new Error("AUTH_REQUIRED");

  const response = await fetch(
    `https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${encodeURIComponent(env.FIREBASE_WEB_API_KEY)}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ idToken: match[1] })
    }
  );
  const data = await response.json();
  const uid = data?.users?.[0]?.localId;
  if (!response.ok || !uid) throw new Error("INVALID_AUTH_TOKEN");
  return uid;
}

function getPlayers(space = {}) {
  return [space.player1, space.player2].filter((player) => player?.uid);
}

function completedResponderUids(mode, challenge = {}) {
  if (mode === "limitReached") return new Set(Object.keys(challenge.results || {}));
  if (mode === "coupleDare") return new Set(Object.keys(challenge.votes || {}));
  if (mode === "threeYesNo") {
    return new Set(
      Object.entries(challenge.answers || {})
        .filter(([, answers]) => Object.keys(answers || {}).length >= 6)
        .map(([uid]) => uid)
    );
  }
  return new Set(Object.keys(challenge.answers || {}));
}

async function hashEventId(value) {
  const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(value));
  return [...new Uint8Array(digest)].map((byte) => byte.toString(16).padStart(2, "0")).join("");
}

async function alreadyDispatched(env, rawId) {
  const key = await hashEventId(rawId);
  const value = await firebaseRequest(env, `pushDispatchLog/${key}`);
  return { key, exists: Boolean(value) };
}

async function markDispatched(env, key) {
  await firebaseRequest(env, `pushDispatchLog/${key}`, {
    method: "PUT",
    body: { sentAt: Date.now() }
  });
}

async function sendFcmToken(env, token, payload) {
  const accessToken = await getGoogleAccessToken(env);
  const projectId = env.FIREBASE_PROJECT_ID;
  const response = await fetch(
    `https://fcm.googleapis.com/v1/projects/${encodeURIComponent(projectId)}/messages:send`,
    {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${accessToken}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        message: {
          token,
          data: {
            title: String(payload.title || "Cactus 🌵"),
            body: String(payload.body || "Une nouveauté vous attend."),
            url: String(payload.url || "./"),
            tag: String(payload.tag || "cactus-update"),
            screen: String(payload.screen || "")
          },
          webpush: {
            headers: { Urgency: "high" }
          }
        }
      })
    }
  );

  const data = await response.json().catch(() => ({}));
  return { ok: response.ok, status: response.status, data };
}

function isUnregisteredFcmError(result) {
  if (result.status === 404) return true;
  if (result.data?.error?.status === "NOT_FOUND") return true;
  return (result.data?.error?.details || []).some((detail) => detail?.errorCode === "UNREGISTERED");
}

async function sendPushToUid(env, uid, payload, preferenceKey = null) {
  if (!uid) return { attempted: 0, sent: 0, failed: 0 };
  const user = await firebaseRequest(env, `users/${uid}`) || {};
  const preferences = user.pushPreferences || {};
  if (preferenceKey && preferences[preferenceKey] === false) return { attempted: 0, sent: 0, failed: 0 };

  const devices = Object.entries(user.pushDevices || {})
    .filter(([, device]) => device && device.enabled !== false && device.token)
    .map(([deviceId, device]) => ({ deviceId, token: device.token }));

  let sent = 0;
  let failed = 0;
  for (const device of devices) {
    const result = await sendFcmToken(env, device.token, payload);
    if (result.ok) {
      sent += 1;
    } else if (isUnregisteredFcmError(result)) {
      await firebaseRequest(env, `users/${uid}/pushDevices/${device.deviceId}`, { method: "DELETE" });
    } else {
      failed += 1;
    }
  }
  return { attempted: devices.length, sent, failed };
}

function summarizeDeliveries(results = []) {
  return results.reduce((summary, result) => {
    const value = result?.status === "fulfilled" ? result.value : { attempted: 1, sent: 0, failed: 1 };
    summary.attempted += Number(value?.attempted || 0);
    summary.sent += Number(value?.sent || 0);
    summary.failed += Number(value?.failed || 0);
    return summary;
  }, { attempted: 0, sent: 0, failed: 0 });
}

async function processAuthenticatedEvent(request, env) {
  const uid = await verifyFirebaseUser(request, env);
  const body = await request.json();
  const spaceId = String(body.spaceId || "");
  const kind = String(body.kind || "");
  if (!spaceId || !kind) return jsonResponse({ error: "Événement incomplet." }, 400);

  const space = await firebaseRequest(env, `spaces/${spaceId}`);
  if (!space) return jsonResponse({ error: "Espace introuvable." }, 404);

  const players = getPlayers(space);
  const actor = players.find((player) => player.uid === uid);
  if (!actor) return jsonResponse({ error: "Tu n'appartiens pas à cet espace." }, 403);
  const targets = players.filter((player) => player.uid !== uid);

  let dispatchId = `${kind}:${spaceId}:${uid}`;
  let jobs = [];

  if (kind === "game-complete") {
    const mode = String(body.mode || "");
    const challengeId = String(body.challengeId || "");
    const config = MODE_CONFIGS[mode];
    if (!config || !challengeId) return jsonResponse({ error: "Jeu inconnu." }, 400);

    const challenge = space[config.path]?.[challengeId];
    if (!challenge) return jsonResponse({ error: "Partie introuvable." }, 404);
    const responders = completedResponderUids(mode, challenge);
    if (!responders.has(uid)) return jsonResponse({ error: "La réponse n'est pas terminée." }, 409);

    dispatchId = `${kind}:${spaceId}:${mode}:${challengeId}:${uid}`;
    jobs = targets.map((target) => {
      const targetAlreadyAnswered = responders.has(target.uid);
      return sendPushToUid(env, target.uid, {
        title: targetAlreadyAnswered ? "Vos réponses sont prêtes ✨" : "À ton tour 🌵",
        body: targetAlreadyAnswered
          ? `${actor.pseudo || "Ta partenaire"} vient de terminer ${config.label}. Découvrez votre résultat.`
          : `${actor.pseudo || "Ta partenaire"} a joué à ${config.label}. Ta réponse l’attend.`,
        tag: `game-${mode}`,
        screen: "dashboard"
      }, targetAlreadyAnswered ? "games" : "answers");
    });
  } else if (kind === "discussion-created") {
    const discussionId = String(body.discussionId || "");
    const discussion = space.discussions?.[discussionId];
    if (!discussion || discussion.createdByUid !== uid) {
      return jsonResponse({ error: "Discussion introuvable." }, 404);
    }
    dispatchId = `${kind}:${spaceId}:${discussionId}:${uid}`;
    jobs = targets.map((target) => sendPushToUid(env, target.uid, {
      title: "On devrait en parler 💬",
      body: `${discussion.createdByPseudo || actor.pseudo || "Ta partenaire"} a ajouté un sujet : ${discussion.title || "une réponse de Cactus"}.`,
      tag: "discussion",
      screen: "discussions"
    }, "answers"));
  } else if (kind === "capsule-created") {
    const capsuleId = String(body.capsuleId || "");
    const capsule = space.dailyTools?.timeCapsules?.[capsuleId];
    if (!capsule || capsule.createdByUid !== uid) {
      return jsonResponse({ error: "Capsule introuvable." }, 404);
    }
    dispatchId = `${kind}:${spaceId}:${capsuleId}:${uid}`;
    jobs = targets.map((target) => sendPushToUid(env, target.uid, {
      title: "Une capsule a été scellée ✨",
      body: `${capsule.createdByPseudo || actor.pseudo || "Ta partenaire"} vient de sceller une capsule. Son contenu restera secret jusqu’au jour d’ouverture.`,
      tag: "capsule-created",
      screen: "timeCapsules"
    }, "garden"));
  } else if (kind === "achievement-unlocked") {
    const achievementId = String(body.achievementId || "");
    const achievement = space.stats?.achievements?.[achievementId];
    if (!achievement || achievement.unlockedBy !== uid) {
      return jsonResponse({ error: "Succès introuvable." }, 404);
    }
    dispatchId = `${kind}:${spaceId}:${achievementId}:${uid}`;
    jobs = targets.map((target) => sendPushToUid(env, target.uid, {
      title: "Nouveau succès débloqué 🏆",
      body: `${actor.pseudo || "Ta partenaire"} vient de débloquer un nouveau succès dans Cactus.`,
      tag: `achievement-${achievementId}`,
      screen: "achievements"
    }, "achievements"));
  } else {
    return jsonResponse({ error: "Type d'événement inconnu." }, 400);
  }

  const dispatch = await alreadyDispatched(env, dispatchId);
  if (dispatch.exists) return jsonResponse({ ok: true, duplicate: true });

  const results = await Promise.allSettled(jobs);
  const delivery = summarizeDeliveries(results);
  if (delivery.failed === 0) {
    await markDispatched(env, dispatch.key);
  }
  return jsonResponse({ ok: delivery.failed === 0, results: results.length, delivery }, delivery.failed === 0 ? 200 : 503);
}

async function processTest(request, env) {
  const uid = await verifyFirebaseUser(request, env);
  const result = await sendPushToUid(env, uid, {
    title: "Test Cactus réussi 🌵",
    body: "La notification a traversé Firebase, Cloudflare et ton téléphone.",
    tag: "cactus-remote-test",
    screen: "settings"
  });
  return jsonResponse({ ok: true, ...result });
}

function parisNowParts() {
  const formatter = new Intl.DateTimeFormat("fr-FR", {
    timeZone: "Europe/Paris",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
  });
  const parts = Object.fromEntries(formatter.formatToParts(new Date()).map((part) => [part.type, part.value]));
  return {
    date: `${parts.year}-${parts.month}-${parts.day}`,
    time: `${parts.hour}:${parts.minute}`
  };
}

function isDueDateTime(item, now) {
  if (!item?.date) return false;
  if (item.date < now.date) return true;
  if (item.date > now.date) return false;
  return !item.time || item.time <= now.time;
}

function isTimeCapsuleDue(capsule, now, nowMs = Date.now()) {
  const storedOpenAt = Number(capsule?.openAt || 0);
  if (Number.isFinite(storedOpenAt) && storedOpenAt > 0) {
    return storedOpenAt <= nowMs;
  }

  // Compatibilité avec les capsules créées avant l'ajout du champ `openAt`.
  if (!capsule?.openDate) return false;
  if (capsule.openDate < now.date) return true;
  if (capsule.openDate > now.date) return false;

  const openTime = /^\d{2}:\d{2}$/.test(String(capsule.openTime || ""))
    ? capsule.openTime
    : "00:00";
  return openTime <= now.time;
}

function importantDateOccursToday(item, now) {
  if (!item?.date) return false;
  const repeat = item.repeat || (item.annual ? "annual" : "none");
  if (repeat === "annual") return item.date.slice(5) === now.date.slice(5);
  if (repeat === "monthly") {
    const originalDay = Number(item.date.slice(8, 10));
    const [year, month, day] = now.date.split("-").map(Number);
    const lastDay = new Date(Date.UTC(year, month, 0)).getUTCDate();
    return Math.min(originalDay, lastDay) === day;
  }
  return item.date === now.date;
}

function importantDateIsDue(item, now) {
  if (!importantDateOccursToday(item, now)) return false;
  return !item.time || item.time <= now.time;
}

async function runScheduledNotifications(env) {
  const spaces = await firebaseRequest(env, "spaces") || {};
  const now = parisNowParts();
  const updates = {};

  for (const [spaceId, space] of Object.entries(spaces)) {
    const players = getPlayers(space);
    const tools = space.dailyTools || {};

    for (const [capsuleId, capsule] of Object.entries(tools.timeCapsules || {})) {
      if (!isTimeCapsuleDue(capsule, now) || capsule.pushOpenedNotificationAt) continue;
      const results = await Promise.allSettled(players.map((player) => sendPushToUid(env, player.uid, {
        title: "Votre capsule peut être ouverte ✨",
        body: capsule.title || "Un message de votre passé vous attend dans Cactus.",
        tag: `capsule-${capsuleId}`,
        screen: "timeCapsules"
      }, "garden")));
      if (summarizeDeliveries(results).failed === 0) {
        updates[`spaces/${spaceId}/dailyTools/timeCapsules/${capsuleId}/pushOpenedNotificationAt`] = Date.now();
      }
    }

    for (const [reminderId, reminder] of Object.entries(tools.reminders || {})) {
      if (!isDueDateTime(reminder, now) || reminder.pushNotificationAt) continue;
      const targets = reminder.target && reminder.target !== "both"
        ? players.filter((player) => player.uid === reminder.target)
        : players;
      const results = await Promise.allSettled(targets.map((player) => sendPushToUid(env, player.uid, {
        title: "Rappel Cactus 🔔",
        body: reminder.title || "Un rappel vous attend.",
        tag: `reminder-${reminderId}`,
        screen: "reminders"
      }, "garden")));
      if (summarizeDeliveries(results).failed === 0) {
        updates[`spaces/${spaceId}/dailyTools/reminders/${reminderId}/pushNotificationAt`] = Date.now();
      }
    }

    for (const [countdownId, countdown] of Object.entries(tools.countdowns || {})) {
      if (!isDueDateTime(countdown, now) || countdown.pushNotificationAt) continue;
      const results = await Promise.allSettled(players.map((player) => sendPushToUid(env, player.uid, {
        title: "Le grand jour est arrivé 🎉",
        body: countdown.title || "Votre compte à rebours est terminé.",
        tag: `countdown-${countdownId}`,
        screen: "importantDates"
      }, "garden")));
      if (summarizeDeliveries(results).failed === 0) {
        updates[`spaces/${spaceId}/dailyTools/countdowns/${countdownId}/pushNotificationAt`] = Date.now();
      }
    }

    for (const [dateId, importantDate] of Object.entries(tools.importantDates || {})) {
      if (!importantDateIsDue(importantDate, now) || importantDate.pushOccurrenceKey === now.date) continue;
      const emoji = importantDate.emoji || "💚";
      const results = await Promise.allSettled(players.map((player) => sendPushToUid(env, player.uid, {
        title: `${emoji} C’est aujourd’hui`,
        body: importantDate.title || "Un moment important vous attend aujourd’hui.",
        tag: `important-date-${dateId}`,
        screen: "importantDates"
      }, "garden")));
      if (summarizeDeliveries(results).failed === 0) {
        updates[`spaces/${spaceId}/dailyTools/importantDates/${dateId}/pushOccurrenceKey`] = now.date;
        updates[`spaces/${spaceId}/dailyTools/importantDates/${dateId}/pushNotificationAt`] = Date.now();
      }
    }
  }

  if (Object.keys(updates).length) {
    await firebaseRequest(env, "", { method: "PATCH", body: updates });
  }
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (request.method === "OPTIONS") return new Response(null, { status: 204, headers: corsHeaders() });
    if (request.method === "GET" && url.pathname === "/health") {
      return jsonResponse({ ok: true, service: "cactus-push" });
    }
    if (request.method !== "POST") return jsonResponse({ error: "Méthode non autorisée." }, 405);

    try {
      if (url.pathname === "/event") return await processAuthenticatedEvent(request, env);
      if (url.pathname === "/test") return await processTest(request, env);
      return jsonResponse({ error: "Route inconnue." }, 404);
    } catch (error) {
      const message = String(error?.message || error);
      if (message === "AUTH_REQUIRED" || message === "INVALID_AUTH_TOKEN") {
        return jsonResponse({ error: "Authentification invalide." }, 401);
      }
      console.error(error);
      return jsonResponse({ error: "Erreur interne du service de notifications." }, 500);
    }
  },

  async scheduled(_controller, env, ctx) {
    ctx.waitUntil(runScheduledNotifications(env));
  }
};
