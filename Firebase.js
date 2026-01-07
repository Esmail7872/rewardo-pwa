import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAMXBGszT_7WaIfAy3SMcCfYG0ZKoY-_bA",
  authDomain: "rewardo-app-dacbb.firebaseapp.com",
  projectId: "rewardo-app-dacbb",
  storageBucket: "rewardo-app-dacbb.firebasestorage.app",
  messagingSenderId: "936435804158",
  appId: "1:936435804158:web:1c48b5b2edad86f73102af"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);