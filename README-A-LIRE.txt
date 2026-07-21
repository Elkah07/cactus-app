CACTUS v85 — Capsules + Mode créateur + Notifications Cloudflare

Fichiers application à remplacer :
- index.html
- css/style.css
- js/firebase.js
- js/script.js
- service-worker.js

Le dossier cloudflare-worker ne va PAS dans ton site GitHub Pages.
Il sert uniquement à créer le Worker Cloudflare gratuit qui envoie les notifications.

La clé VAPID publique Firebase est déjà intégrée dans js/firebase.js.

IMPORTANT :
Le champ CACTUS_PUSH_WORKER_URL de js/firebase.js est volontairement vide.
Après avoir déployé le Worker Cloudflare, récupère son URL workers.dev et ajoute-la dans ce champ.

Lis ensuite :
cloudflare-worker/README-CLOUDFLARE-NOTIFICATIONS.md

N'utilise pas / ne déploie pas l'ancien dossier Firebase Functions de la v84 si tu choisis cette solution Cloudflare.
