import { auth, db } from "./firebase.js";
import {
  doc, updateDoc, increment, getDoc
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

window.earnCoin = async () => {
  const user = auth.currentUser;
  if (!user) return alert("Login first");

  // এখানে future এ real ads বসবে
  await updateDoc(doc(db, "users", user.uid), {
    coins: increment(1)
  });

  const snap = await getDoc(doc(db, "users", user.uid));
  document.getElementById("coin").innerText = snap.data().coins;
};