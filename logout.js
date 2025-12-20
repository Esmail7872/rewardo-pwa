import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

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

window.logout = function () {
  signOut(auth)
    .then(() => {
      window.location.href = "index.html";
    })
    .catch((error) => {
      alert(error.message);
    });
};