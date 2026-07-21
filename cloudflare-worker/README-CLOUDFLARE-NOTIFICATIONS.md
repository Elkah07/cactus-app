# Notifications CACTUS avec Cloudflare Workers (sans Firebase Blaze)

La clé publique VAPID Firebase est déjà intégrée dans `js/firebase.js`.

## 1. Créer le Worker Cloudflare

Crée un compte Cloudflare gratuit, puis ouvre **Workers & Pages** et crée un Worker.

Tu peux soit déployer le dossier `cloudflare-worker` avec Wrangler, soit copier le contenu de `src/index.js` dans l'éditeur du Worker.

Le fichier `wrangler.toml` contient déjà les trois valeurs publiques de ton projet Firebase :

- `FIREBASE_PROJECT_ID`
- `FIREBASE_DATABASE_URL`
- `FIREBASE_WEB_API_KEY`

## 2. Créer la clé de compte de service Firebase

Dans Firebase :

**Paramètres du projet > Comptes de service > Générer une nouvelle clé privée**

Un fichier JSON est téléchargé sur ton ordinateur.

IMPORTANT : ce fichier donne un accès serveur à Firebase. Ne le mets jamais sur GitHub et ne l'envoie pas dans le code de l'application.

## 3. Ajouter le JSON comme secret Cloudflare

Dans les paramètres du Worker, ouvre **Variables et secrets**.

Crée un secret nommé exactement :

`FIREBASE_SERVICE_ACCOUNT_JSON`

Colle comme valeur le contenu COMPLET du fichier JSON téléchargé depuis Firebase.

Avec Wrangler :

```bash
npx wrangler secret put FIREBASE_SERVICE_ACCOUNT_JSON
```

Puis colle le contenu du JSON lorsque Wrangler le demande.

## 4. Configurer le Cron

Le `wrangler.toml` contient déjà :

`*/5 * * * *`

Cela vérifie toutes les cinq minutes les capsules arrivées à échéance, les rappels et les comptes à rebours.

Dans le tableau de bord Cloudflare, tu peux aussi créer ce Cron dans **Triggers / Cron Triggers**.

## 5. Déployer et récupérer l'URL

Après déploiement, Cloudflare fournit une URL ressemblant à :

`https://cactus-push.ton-compte.workers.dev`

Ouvre ensuite `js/firebase.js` et remplace :

```js
window.CACTUS_PUSH_WORKER_URL = window.CACTUS_PUSH_WORKER_URL || "";
```

par :

```js
window.CACTUS_PUSH_WORKER_URL = window.CACTUS_PUSH_WORKER_URL || "https://cactus-push.ton-compte.workers.dev";
```

## 6. Test

Dans CACTUS :

1. Active le **Mode créateur**.
2. Active les notifications téléphone.
3. Utilise le bouton de test des notifications.

Quand l'URL du Worker est configurée, ce bouton effectue un vrai test distant :

CACTUS -> Cloudflare Worker -> Firebase Cloud Messaging -> téléphone.

Sans URL de Worker, le bouton reste un test local du téléphone.

## Ce que le Worker envoie automatiquement

- une réponse / fin de parcours dans les 11 jeux ;
- une nouvelle demande « On devrait en parler » ;
- la création d'une capsule temporelle ;
- un nouveau succès débloqué ;
- une capsule arrivée à sa date d'ouverture ;
- un rappel arrivé à échéance ;
- un compte à rebours terminé.

## Sécurité

Les requêtes venant de CACTUS doivent contenir un vrai jeton Firebase Authentication.
Le Worker vérifie ce jeton puis vérifie que l'utilisateur appartient réellement à l'espace concerné avant d'envoyer une notification.
La clé privée du compte de service reste uniquement dans les secrets Cloudflare.
