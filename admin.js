import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore, doc, updateDoc, increment } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAMXBGszT_7WaIfAy3SMcCfYG0ZKoY-_bA",
  authDomain: "rewardo-app-dacbb.firebaseapp.com",
  projectId: "rewardo-app-dacbb",
  storageBucket: "rewardo-app-dacbb.appspot.com",
  messagingSenderId: "936435804158",
  appId: "1:936435804158:web:1c48b5b2edad86f73102af"
};

const ADMIN_EMAIL = "test@rewardo.com";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

onAuthStateChanged(auth, (user) => {
  if (!user || user.email !== ADMIN_EMAIL) {
    window.location.href = "index.html";
  }
});

window.addCoins = async function () {
  const uid = document.getElementById("uid").value;
  const coins = Number(document.getElementById("coins").value);

  await updateDoc(doc(db, "users", uid), {
    coins: increment(coins)
  });

  document.getElementById("status").innerText = "Coins Added ✅";
};

window.removeCoins = async function () {
  const uid = document.getElementById("uid").value;
  const coins = Number(document.getElementById("coins").value);

  await updateDoc(doc(db, "users", uid), {
    coins: increment(-coins)
  });

  document.getElementById("status").innerText = "Coins Removed ✅";
};