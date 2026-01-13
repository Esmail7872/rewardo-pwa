import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

/* 🔹 Firebase config */
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "rewardo-app-dacbb.firebaseapp.com",
  projectId: "rewardo-app-dacbb",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

/* 🔹 SIGN UP */
window.signUp = function () {
  const email = document.getElementById("email")?.value;
  const password = document.getElementById("password")?.value;

  if (!email || !password) {
    document.getElementById("msg").innerText = "Email & password required";
    return;
  }

  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      window.location.href = "dashboard.html";
    })
    .catch((error) => {
      document.getElementById("msg").innerText = error.message;
    });
};

/* 🔹 LOGIN */
window.login = function () {
  const email = document.getElementById("email")?.value;
  const password = document.getElementById("password")?.value;

  if (!email || !password) {
    document.getElementById("msg").innerText = "Email & password required";
    return;
  }

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      window.location.href = "dashboard.html";
    })
    .catch((error) => {
      document.getElementById("msg").innerText = error.message;
    });
};