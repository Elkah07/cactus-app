function getCactusAppScope() {
    try {
        return new URL(self.registration.scope).href;
    } catch (error) {
        return self.location.origin + "/";
    }
}

function resolveCactusNotificationTarget(rawTarget) {
    const scope = getCactusAppScope();
    if (!rawTarget || rawTarget === "." || rawTarget === "./" || rawTarget === "/") return scope;
    try {
        const candidate = new URL(rawTarget, scope);
        const scopeUrl = new URL(scope);
        // Ne jamais envoyer la PWA en dehors de son propre sous-dossier GitHub Pages.
        if (candidate.origin !== scopeUrl.origin || !candidate.pathname.startsWith(scopeUrl.pathname)) return scope;
        return candidate.href;
    } catch (error) {
        return scope;
    }
}

self.addEventListener("notificationclick", (event) => {
    event.notification.close();
    const targetUrl = resolveCactusNotificationTarget(event.notification?.data?.url);
    const requestedScreen = event.notification?.data?.screen || "";

    event.waitUntil(
        self.clients.matchAll({ type: "window", includeUncontrolled: true }).then(async (clients) => {
            const scope = getCactusAppScope();
            const existingClient = clients.find((client) => client.url.startsWith(scope));

            if (existingClient) {
                if (requestedScreen && "postMessage" in existingClient) {
                    existingClient.postMessage({ type: "CACTUS_NOTIFICATION_CLICK", screen: requestedScreen });
                }
                // On ne navigue plus un client existant vers la racine du domaine : sur GitHub Pages
                // cela pouvait sortir du sous-dossier de l'app et provoquer une page 404.
                if ("focus" in existingClient) return existingClient.focus();
            }

            if (!self.clients.openWindow) return undefined;
            if (!requestedScreen) return self.clients.openWindow(targetUrl);
            try {
                const deepLink = new URL(targetUrl);
                deepLink.searchParams.set("cactusScreen", requestedScreen);
                return self.clients.openWindow(deepLink.href);
            } catch (error) {
                return self.clients.openWindow(targetUrl);
            }
        })
    );
});

let cactusMessaging = null;
try {
    importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js");
    importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js");
    firebase.initializeApp({
        apiKey: "AIzaSyBsieGW6fu5RmTrmrrumIoSOm600HSn160",
        authDomain: "couple-game-9f881.firebaseapp.com",
        databaseURL: "https://couple-game-9f881-default-rtdb.europe-west1.firebasedatabase.app",
        projectId: "couple-game-9f881",
        storageBucket: "couple-game-9f881.firebasestorage.app",
        messagingSenderId: "2640989123",
        appId: "1:2640989123:web:05b0d586bfeec1bb598b76"
    });
    cactusMessaging = firebase.messaging();
    cactusMessaging.onBackgroundMessage((payload) => {
        // Les payloads avec `notification` sont déjà affichés automatiquement par FCM.
        if (payload?.notification) return;
        const title = payload?.data?.title || "Cactus 🌵";
        const scope = getCactusAppScope();
        const options = {
            body: payload?.data?.body || "Une nouveauté vous attend.",
            icon: new URL("icons/notification-icon.png", scope).href,
            badge: new URL("icons/notification-badge.png", scope).href,
            tag: payload?.data?.tag || "cactus-update",
            renotify: false,
            data: {
                url: resolveCactusNotificationTarget(payload?.data?.url),
                screen: payload?.data?.screen || ""
            }
        };
        return self.registration.showNotification(title, options);
    });
} catch (error) {
    console.warn("Firebase Messaging indisponible dans le service worker", error);
}

const CACHE_VERSION = "v1159";
const SHELL_CACHE = `cactus-shell-${CACHE_VERSION}`;
const RUNTIME_CACHE = `cactus-runtime-${CACHE_VERSION}`;

const APP_SHELL = [
    "./index.html",
    "./css/style.css?v=1159",
    "./js/firebase.js?v=86",
    "./js/script.js?v=1159",
    "./js/shared-experiences.js?v=1159",
    "./js/screens.js?v=1159",
    "./js/utils.js",
    "./js/storage.js",
    "./js/rankings.js",
    "./js/questions.js",
    "./data/would-you-rather.json",
    "./data/three-yes-three-no.json",
    "./data/limit-reached.json",
    "./data/couple-dares.json",
    "./data/best-lie.json",
    "./data/rankings.json",
    "./data/guess-my-answer.json",
    "./data/likely.json",
    "./data/ok-ou-pas-ok.json",
    "./data/green-flag-red-flag.json",
    "./data/princess-treatment.json",
    "./data/questions.json",
    "./manifest.json?v=1155",
    "./icons/icon-192-v2.png",
    "./icons/icon-512-v2.png",
    "./icons/notification-badge.png",
    "./assets/avatars/avatar-1.webp",
    "./assets/avatars/avatar-2.webp",
    "./assets/avatars/avatar-3.webp",
    "./assets/avatars/avatar-4.webp",
    "./assets/avatars/avatar-5.webp",
    "./assets/avatars/avatar-6.webp",
    "./assets/avatars/avatar-7.webp",
    "./assets/avatars/avatar-8.webp",
    "./assets/avatars/avatar-9.webp",
    "./assets/avatars/avatar-10.webp",
    "./assets/avatars/avatar-11.webp",
    "./assets/avatars/avatar-12.webp",
    "./assets/cactus-rig/stage-1-body.webp",
    "./assets/cactus-rig/stage-1-body-bare.webp",
    "./assets/cactus-rig/stage-1-accessory-foreground.webp",
    "./assets/cactus-rig/stage-2-accessory-foreground.webp",
    "./assets/cactus-rig/stage-3-accessory-foreground.webp",
    "./assets/cactus-rig/stage-4-accessory-foreground.webp",
    "./assets/cactus-rig/stage-5-accessory-foreground.webp",
    "./assets/cactus-rig/stage-6-accessory-foreground.webp",
    "./assets/cactus-rig/stage-1-wave-arm.webp",
    "./assets/cactus-rig/stage-2-body.webp",
    "./assets/cactus-rig/stage-2-body-bare.webp",
    "./assets/cactus-rig/stage-3-body.webp",
    "./assets/cactus-rig/stage-3-body-bare.webp",
    "./assets/cactus-rig/stage-4-body.webp",
    "./assets/cactus-rig/stage-4-body-bare.webp",
    "./assets/cactus-rig/stage-5-body.webp",
    "./assets/cactus-rig/stage-5-body-bare.webp",
    "./assets/cactus-rig/stage-6-body.webp",
    "./assets/cactus-rig/stage-6-body-bare.webp",
    "./assets/cactus-accessories/flower-hat.webp",
    "./assets/cactus-accessories/party-hat.webp",
    "./assets/cactus-accessories/gold-crown.webp",
    "./assets/cactus-accessories/round-glasses.webp",
    "./assets/cactus-accessories/heart-necklace.webp",
    "./assets/cactus-accessories/pink-bow.webp",
    "./assets/cactus-accessories/black-sunglasses.webp",
    "./assets/cactus-accessories/gold-halo.webp",
    "./assets/cactus-accessories/green-cap.webp",
    "./assets/cactus-accessories/cozy-beanie.webp",
    "./assets/cactus-accessories/cactus-headphones.webp",
    "./assets/cactus-accessories/head-bow.webp",
    "./assets/cactus-accessories-trimmed/flowerHat.webp",
    "./assets/cactus-accessories-trimmed/partyHat.webp",
    "./assets/cactus-accessories-trimmed/goldCrown.webp",
    "./assets/cactus-accessories-trimmed/roundGlasses.webp",
    "./assets/cactus-accessories-trimmed/heartNecklace.webp",
    "./assets/cactus-accessories-trimmed/pinkBow.webp",
    "./assets/cactus-accessories-trimmed/blackSunglasses.webp",
    "./assets/cactus-accessories-trimmed/goldHalo.webp",
    "./assets/cactus-accessories-trimmed/greenCap.webp",
    "./assets/cactus-accessories-trimmed/cozyBeanie.webp",
    "./assets/cactus-accessories-trimmed/cactusHeadphones.webp",
    "./assets/cactus-accessories-trimmed/headBow.webp",
    "./assets/cactus-would-rather.webp",
    "./assets/cactus-limit-reached.webp",
    "./assets/cactus-three-yes-no.webp",
    "./assets/cactus-couple-dare.webp",
    "./assets/cactus-best-lie.webp",
    "./icons/notification-icon.png",
    "./assets/cactus-ranking.png",
    "./assets/cactus-guess.png",
    "./assets/cactus-likely.png",
    "./assets/cactus-ok.png",
    "./assets/cactus-greenflag.png",
    "./assets/cactus-princess.png",
    "./assets/cactus-questions.png",
    "./assets/cactus-history.png",
    "./assets/cactus-stats.png",
    "./assets/cactus-achievements.png",
    "./assets/cactus-compatibility.png",
    "./assets/cactus-garden.png",
    "./assets/cactus-playing.png",
    "./assets/cactus-main.png",
    "./assets/cactus-profile.png",
    "./assets/cactus-streak.png"
];

self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(SHELL_CACHE)
            .then((cache) => cache.addAll(APP_SHELL))
    );
});

self.addEventListener("message", (event) => {
    if (event.data && event.data.type === "SKIP_WAITING") {
        self.skipWaiting();
    }
});

self.addEventListener("activate", (event) => {
    const currentCaches = [SHELL_CACHE, RUNTIME_CACHE];

    event.waitUntil(
        caches.keys()
            .then((cacheNames) => {
                return Promise.all(
                    cacheNames
                        .filter((cacheName) => {
                            return cacheName.startsWith("cactus-") &&
                                !currentCaches.includes(cacheName);
                        })
                        .map((cacheName) => caches.delete(cacheName))
                );
            })
            .then(() => self.clients.claim())
    );
});

async function matchCachedRequest(request) {
    const directMatch = await caches.match(request);
    if (directMatch) return directMatch;

    const url = new URL(request.url);
    if (url.origin !== self.location.origin || !url.search) return null;

    url.search = "";
    return caches.match(url.toString());
}

async function networkFirst(request) {
    try {
        const response = await fetch(request);

        if (response.ok) {
            const cache = await caches.open(RUNTIME_CACHE);
            cache.put(request, response.clone());
        }

        return response;
    } catch (error) {
        return (await matchCachedRequest(request)) ||
            (await caches.match("./index.html"));
    }
}

async function cacheFirstWithRefresh(request) {
    const cachedResponse = await matchCachedRequest(request);
    const updatePromise = fetch(request)
        .then(async (response) => {
            if (response.ok) {
                const cache = await caches.open(RUNTIME_CACHE);
                await cache.put(request, response.clone());
            }

            return response;
        });

    if (cachedResponse) {
        updatePromise.catch(() => undefined);
        return cachedResponse;
    }

    return updatePromise;
}

self.addEventListener("fetch", (event) => {
    const request = event.request;

    if (request.method !== "GET") {
        return;
    }

    const requestUrl = new URL(request.url);

    if (requestUrl.origin !== self.location.origin) {
        return;
    }

    if (request.mode === "navigate") {
        event.respondWith(networkFirst(request));
        return;
    }

    event.respondWith(cacheFirstWithRefresh(request));
});
