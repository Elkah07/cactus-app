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

console.log("🔥 Firebase connecté !");