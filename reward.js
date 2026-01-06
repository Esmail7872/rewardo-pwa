import { auth, db } from "./firebase.js";
import { doc, getDoc, updateDoc, increment } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Earn Coin function (Mock Ad)
window.earnCoin = async () => {
  const user = auth.currentUser;
  if (!user) {
    alert("Login first!");
    return;
  }

  // Reference to current user
  const userRef = doc(db, "users", user.uid);

  // Increase coins by 1 (future: replace with ad reward logic)
  await updateDoc(userRef, {
    coins: increment(1)
  });

  // Update coin display
  const snap = await getDoc(userRef);
  document.getElementById("coin").innerText = snap.data().coins;
};