const CACHE_NAME = "cactus-v6";

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
    "./data/guess-my-answer.json",
    "./data/likely.json",
    "./data/ok-ou-pas-ok.json",
    "./data/green-flag-red-flag.json",
    "./data/princess-treatment.json",
    "./data/questions.json",
    "./assets/cactus-main.png",
    "./assets/cactus-ranking.png",
    "./assets/cactus-guess.png",
    "./assets/cactus-questions.png",
    "./assets/cactus-likely.png",
    "./assets/cactus-ok.png",
    "./assets/cactus-greenflag.png",
    "./assets/cactus-princess.png",
    "./assets/cactus-stats.png",
    "./icons/icon-192.png",
    "./icons/icon-512.png",
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
