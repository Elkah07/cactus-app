const CACHE_VERSION = "v64";
const SHELL_CACHE = `cactus-shell-${CACHE_VERSION}`;
const RUNTIME_CACHE = `cactus-runtime-${CACHE_VERSION}`;

const APP_SHELL = [
    "./index.html",
    "./css/style.css?v=64",
    "./js/firebase.js",
    "./js/script.js?v=64",
    "./js/screens.js?v=61",
    "./js/utils.js",
    "./js/storage.js",
    "./js/rankings.js",
    "./js/questions.js",
    "./manifest.json",
    "./icons/icon-192-v2.png",
    "./icons/icon-512-v2.png",
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
    "./assets/cactus-rig/stage-1-wave-arm.webp",
    "./assets/cactus-rig/stage-2-body.webp",
    "./assets/cactus-rig/stage-3-body.webp",
    "./assets/cactus-rig/stage-4-body.webp",
    "./assets/cactus-rig/stage-5-body.webp",
    "./assets/cactus-rig/stage-6-body.webp",
    "./assets/cactus-accessories/flower-hat.webp",
    "./assets/cactus-accessories/party-hat.webp",
    "./assets/cactus-accessories/gold-crown.webp",
    "./assets/cactus-accessories/round-glasses.webp",
    "./assets/cactus-accessories/heart-necklace.webp",
    "./assets/cactus-accessories/pink-bow.webp"
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

async function networkFirst(request) {
    try {
        const response = await fetch(request);

        if (response.ok) {
            const cache = await caches.open(RUNTIME_CACHE);
            cache.put(request, response.clone());
        }

        return response;
    } catch (error) {
        return (await caches.match(request)) ||
            (await caches.match("./index.html"));
    }
}

async function cacheFirstWithRefresh(request) {
    const cachedResponse = await caches.match(request);
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
