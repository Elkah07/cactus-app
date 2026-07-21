const firebaseConfig = {
  apiKey: "AIzaSyBsieGW6fu5RmTrmrrumIoSOm600HSn160",
  authDomain: "couple-game-9f881.firebaseapp.com",
  databaseURL: "https://couple-game-9f881-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "couple-game-9f881",
  storageBucket: "couple-game-9f881.firebasestorage.app",
  messagingSenderId: "2640989123",
  appId: "1:2640989123:web:05b0d586bfeec1bb598b76"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const database = firebase.database();

// Clé publique Web Push (VAPID). Elle peut rester vide pour tester la clé par défaut,
// mais une clé générée dans Firebase Console > Cloud Messaging est recommandée.
window.CACTUS_FCM_VAPID_KEY = window.CACTUS_FCM_VAPID_KEY || "";
let messaging = null;

if ("Notification" in window && "serviceWorker" in navigator && firebase.messaging) {
    try {
        messaging = firebase.messaging();
    } catch (error) {
        console.warn("Firebase Messaging indisponible sur cet appareil", error);
    }
}

auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL)
    .then(() => {
        console.log("Connexion persistante activée");
    })
    .catch((error) => {
        console.error("Erreur persistence :", error);
    });

console.log("🔥 Firebase connecté !");