import { auth, db } from "./firebase.js";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

import {
  doc, setDoc, getDoc
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

window.login = async () => {
  await signInWithEmailAndPassword(
    auth,
    email.value,
    password.value
  );
};

window.register = async () => {
  const res = await createUserWithEmailAndPassword(
    auth,
    email.value,
    password.value
  );

  await setDoc(doc(db, "users", res.user.uid), {
    coins: 0,
    role: "user"
  });
};

onAuthStateChanged(auth, async (user) => {
  if (user) {
    authBox.style.display = "none";
    userBox.style.display = "block";

    const snap = await getDoc(doc(db, "users", user.uid));
    coin.innerText = snap.data().coins;
  }
});