// Admin.js – Future-ready admin features

import { db } from "./firebase.js";
import { doc, updateDoc, getDoc, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Example: Update user coins
export async function updateUserCoins(userId, amount) {
  const userRef = doc(db, "users", userId);
  const snap = await getDoc(userRef);

  if (!snap.exists()) return alert("User not found!");

  await updateDoc(userRef, {
    coins: snap.data().coins + amount
  });
}

// Example: Send notification to user
export async function sendNotification(userId, message) {
  const notifRef = doc(db, "notifications", userId);
  await updateDoc(notifRef, {
    message: message,
    timestamp: new Date()
  });
}

// Example: List all users (Admin Dashboard)
export async function getAllUsers() {
  const querySnapshot = await getDocs(collection(db, "users"));
  const users = [];
  querySnapshot.forEach(doc => {
    users.push({ id: doc.id, ...doc.data() });
  });
  return users;
}