const CACHE_NAME = "cactus-v3";

const FILES_TO_CACHE = [
    "./",
    "./index.html",
    "./css/style.css",
    "./js/firebase.js",
    "./js/script.js",
    "./js/screens.js",
    "./js/utils.js",
    "./js/storage.js",
    "./js/rankings.js",
    "./js/questions.js",
    "./data/rankings.json",
    "./manifest.json"
];

self.addEventListener("install", (event) => {
    self.skipWaiting();

    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(FILES_TO_CACHE);
        })
    );
});

self.addEventListener("activate", (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );

    self.clients.claim();
});

self.addEventListener("fetch", (event) => {
    event.respondWith(
        fetch(event.request).catch(() => {
            return caches.match(event.request);
        })
    );
});