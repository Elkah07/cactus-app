"use strict";

const {onValueCreated, onValueWritten} = require("firebase-functions/v2/database");
const {onSchedule} = require("firebase-functions/v2/scheduler");
const {logger} = require("firebase-functions");
const {initializeApp} = require("firebase-admin/app");
const {getDatabase} = require("firebase-admin/database");
const {getMessaging} = require("firebase-admin/messaging");

initializeApp();

const REGION = "europe-west1";
const APP_URL = "./";

const MODE_CONFIGS = [
  ["ranking", "rankingChallenges", "Classements"],
  ["guess", "guessAnswers", "Devine ma réponse"],
  ["questions", "questionsChallenges", "Questions"],
  ["likely", "likelyChallenges", "Qui est le plus susceptible"],
  ["ok", "okChallenges", "OK ou Pas OK"],
  ["greenFlag", "greenFlagChallenges", "Green Flag / Red Flag"],
  ["princess", "princessChallenges", "Princess Treatment"],
  ["wouldRather", "wouldRatherChallenges", "Tu préfères ?"],
  ["threeYesNo", "threeYesNoChallenges", "3 oui / 3 non"],
  ["limitReached", "limitReachedChallenges", "Limite atteinte"],
  ["coupleDare", "coupleDareChallenges", "Défis à deux"]
];

function completedResponderUids(mode, challenge = {}) {
  if (mode === "limitReached") return new Set(Object.keys(challenge.results || {}));
  if (mode === "coupleDare") return new Set(Object.keys(challenge.votes || {}));
  if (mode === "threeYesNo") {
    return new Set(Object.entries(challenge.answers || {})
      .filter(([, answers]) => Object.keys(answers || {}).length >= 6)
      .map(([uid]) => uid));
  }
  return new Set(Object.keys(challenge.answers || {}));
}

async function getSpacePlayers(spaceId) {
  const snapshot = await getDatabase().ref(`spaces/${spaceId}`).get();
  const space = snapshot.val() || {};
  return [space.player1, space.player2].filter((player) => player && player.uid);
}

async function sendPushToUid(uid, payload, preferenceKey = null) {
  if (!uid) return;
  const userSnapshot = await getDatabase().ref(`users/${uid}`).get();
  const user = userSnapshot.val() || {};
  const preferences = user.pushPreferences || {};
  if (preferenceKey && preferences[preferenceKey] === false) return;

  const devices = Object.entries(user.pushDevices || {})
    .filter(([, device]) => device && device.enabled !== false && device.token)
    .map(([deviceId, device]) => ({deviceId, token: device.token}));
  if (!devices.length) return;

  const message = {
    tokens: devices.map((device) => device.token),
    data: {
      title: String(payload.title || "Cactus 🌵"),
      body: String(payload.body || "Une nouveauté vous attend."),
      url: String(payload.url || APP_URL),
      tag: String(payload.tag || "cactus-update")
    },
    webpush: {
      headers: {Urgency: "high"}
    }
  };

  const result = await getMessaging().sendEachForMulticast(message);
  const cleanup = {};
  result.responses.forEach((response, index) => {
    if (!response.success) {
      const code = String(response.error?.code || "");
      if (code.includes("registration-token-not-registered") || code.includes("invalid-registration-token")) {
        cleanup[`users/${uid}/pushDevices/${devices[index].deviceId}`] = null;
      }
    }
  });
  if (Object.keys(cleanup).length) await getDatabase().ref().update(cleanup);
}

async function notifyPartnerForChallenge(spaceId, mode, label, before = {}, after = {}) {
  const beforeUids = completedResponderUids(mode, before);
  const afterUids = completedResponderUids(mode, after);
  const newlyCompleted = [...afterUids].filter((uid) => !beforeUids.has(uid));
  if (!newlyCompleted.length) return;

  const players = await getSpacePlayers(spaceId);
  for (const actorUid of newlyCompleted) {
    const actor = players.find((player) => player.uid === actorUid);
    const targets = players.filter((player) => player.uid !== actorUid);
    for (const target of targets) {
      const targetAlreadyAnswered = beforeUids.has(target.uid);
      await sendPushToUid(target.uid, {
        title: targetAlreadyAnswered ? "Vos réponses sont prêtes ✨" : "À ton tour 🌵",
        body: targetAlreadyAnswered
          ? `${actor?.pseudo || "Ta partenaire"} vient de terminer ${label}. Découvrez votre résultat.`
          : `${actor?.pseudo || "Ta partenaire"} a joué à ${label}. Ta réponse l’attend.`,
        tag: `game-${mode}`
      }, targetAlreadyAnswered ? "games" : "answers");
    }
  }
}

for (const [mode, path, label] of MODE_CONFIGS) {
  const exportName = `notify_${mode}`;
  exports[exportName] = onValueWritten({
    ref: `/spaces/{spaceId}/${path}/{challengeId}`,
    region: REGION
  }, async (event) => {
    const before = event.data.before.val() || {};
    const after = event.data.after.val() || {};
    if (!event.data.after.exists()) return;
    try {
      await notifyPartnerForChallenge(event.params.spaceId, mode, label, before, after);
    } catch (error) {
      logger.error(`Notification ${mode} impossible`, error);
    }
  });
}

exports.notify_new_discussion = onValueCreated({
  ref: "/spaces/{spaceId}/discussions/{discussionId}",
  region: REGION
}, async (event) => {
  const discussion = event.data.val() || {};
  const players = await getSpacePlayers(event.params.spaceId);
  const targets = players.filter((player) => player.uid !== discussion.createdByUid);
  await Promise.all(targets.map((target) => sendPushToUid(target.uid, {
    title: "On devrait en parler 💬",
    body: `${discussion.createdByPseudo || "Ta partenaire"} a ajouté un sujet à votre liste : ${discussion.title || "une réponse de Cactus"}.`,
    tag: "discussion"
  }, "answers")));
});

exports.notify_new_time_capsule = onValueCreated({
  ref: "/spaces/{spaceId}/dailyTools/timeCapsules/{capsuleId}",
  region: REGION
}, async (event) => {
  const capsule = event.data.val() || {};
  const players = await getSpacePlayers(event.params.spaceId);
  const targets = players.filter((player) => player.uid !== capsule.createdByUid);
  await Promise.all(targets.map((target) => sendPushToUid(target.uid, {
    title: "Une capsule a été scellée ✨",
    body: `${capsule.createdByPseudo || "Ta partenaire"} a confié un message au futur : ${capsule.title || "Capsule temporelle"}.`,
    tag: "capsule-created"
  }, "garden")));
});

function parisNowParts() {
  const formatter = new Intl.DateTimeFormat("fr-FR", {
    timeZone: "Europe/Paris",
    year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", hour12: false
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

exports.send_due_cactus_notifications = onSchedule({
  schedule: "every 30 minutes",
  timeZone: "Europe/Paris",
  region: REGION
}, async () => {
  const spacesSnapshot = await getDatabase().ref("spaces").get();
  const spaces = spacesSnapshot.val() || {};
  const now = parisNowParts();
  const updates = {};
  const jobs = [];

  for (const [spaceId, space] of Object.entries(spaces)) {
    const players = [space.player1, space.player2].filter((player) => player?.uid);
    const tools = space.dailyTools || {};

    for (const [capsuleId, capsule] of Object.entries(tools.timeCapsules || {})) {
      if (!capsule.openDate || capsule.openDate > now.date || capsule.pushOpenedNotificationAt) continue;
      players.forEach((player) => jobs.push(sendPushToUid(player.uid, {
        title: "Votre capsule peut être ouverte ✨",
        body: capsule.title || "Un message de votre passé vous attend dans Cactus.",
        tag: `capsule-${capsuleId}`
      }, "garden")));
      updates[`spaces/${spaceId}/dailyTools/timeCapsules/${capsuleId}/pushOpenedNotificationAt`] = Date.now();
    }

    for (const [reminderId, reminder] of Object.entries(tools.reminders || {})) {
      if (!isDueDateTime(reminder, now) || reminder.pushNotificationAt) continue;
      const targets = reminder.target && reminder.target !== "both"
        ? players.filter((player) => player.uid === reminder.target)
        : players;
      targets.forEach((player) => jobs.push(sendPushToUid(player.uid, {
        title: "Rappel Cactus 🔔",
        body: reminder.title || "Un rappel vous attend.",
        tag: `reminder-${reminderId}`
      }, "garden")));
      updates[`spaces/${spaceId}/dailyTools/reminders/${reminderId}/pushNotificationAt`] = Date.now();
    }

    for (const [countdownId, countdown] of Object.entries(tools.countdowns || {})) {
      if (!isDueDateTime(countdown, now) || countdown.pushNotificationAt) continue;
      players.forEach((player) => jobs.push(sendPushToUid(player.uid, {
        title: "Le grand jour est arrivé 🎉",
        body: countdown.title || "Votre compte à rebours est terminé.",
        tag: `countdown-${countdownId}`
      }, "garden")));
      updates[`spaces/${spaceId}/dailyTools/countdowns/${countdownId}/pushNotificationAt`] = Date.now();
    }
  }

  await Promise.allSettled(jobs);
  if (Object.keys(updates).length) await getDatabase().ref().update(updates);
});
