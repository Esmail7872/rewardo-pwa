import { auth } from "./firebase.js";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.7.0/firebase-auth.js";

const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const message = document.getElementById("message");

document.getElementById("loginBtn").addEventListener("click", login);
document.getElementById("signupBtn").addEventListener("click", signup);

function login() {
  const email = emailInput.value;
  const password = passwordInput.value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {window.location.href = "dashboard.html";
      message.style.color = "green";
    })
    .catch((error) => {
      message.innerText = error.message;
      message.style.color = "red";
    });
}

function signup() {
  const email = emailInput.value;
  const password = passwordInput.value;

  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      message.innerText = "✅ Account created successfully";
      message.style.color = "green";
    })
    .catch((error) => {
      message.innerText = error.message;
      message.style.color = "red";
    });
}