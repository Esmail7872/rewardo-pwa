import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore, doc, getDoc, setDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAMXBGszT_7WaIfAy3SMcCfYG0ZKoY-_bA",
  authDomain: "rewardo-app-dacbb.firebaseapp.com",
  projectId: "rewardo-app-dacbb",
  storageBucket: "rewardo-app-dacbb.appspot.com",
  messagingSenderId: "936435804158",
  appId: "1:936435804158:web:1c48b5b2edad86f73102af"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

onAuthStateChanged(auth, async (user) => {
  if (!user) return;

  const ref = doc(db, "users", user.uid);
  const snap = await getDoc(ref);

  if (!snap.exists()) {
    await setDoc(ref, {
      email: user.email,
      coins: 0,
      createdAt: Date.now()
    });
    document.getElementById("coins").innerText = "0";
  } else {
    document.getElementById("coins").innerText = snap.data().coins ?? 0;
  }
});