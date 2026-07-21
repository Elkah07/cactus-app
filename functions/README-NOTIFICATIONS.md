# Notifications téléphone CACTUS

Le client PWA est prêt à recevoir des notifications Firebase Cloud Messaging.

## 1. Générer la clé Web Push
Dans Firebase Console :

**Paramètres du projet > Cloud Messaging > Configuration Web > Certificats Web Push > Générer une paire de clés**

Copier uniquement la **clé publique** dans `js/firebase.js` :

```js
window.CACTUS_FCM_VAPID_KEY = "VOTRE_CLE_PUBLIQUE";
```

La clé publique VAPID peut être présente dans le code client. Ne jamais mettre une clé privée ou un fichier de compte de service dans GitHub.

## 2. Déployer les Cloud Functions
Depuis la racine du projet, avec Firebase CLI configuré sur le projet `couple-game-9f881` :

```bash
cd functions
npm install
cd ..
firebase deploy --only functions
```

Les fonctions envoient les notifications pour :
- les réponses et fins de parties des 11 jeux ;
- les nouveaux sujets « On devrait en parler » ;
- les nouvelles capsules temporelles ;
- les capsules arrivées à leur date d’ouverture ;
- les rappels ;
- les comptes à rebours terminés.

Les notifications programmées utilisent Cloud Scheduler via les fonctions Firebase de 2e génération.
