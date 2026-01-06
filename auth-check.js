import { auth, db } from "./firebase.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Check if user is logged in and role
onAuthStateChanged(auth, async (user) => {
  if (!user) {
    // Not logged in → redirect to login
    window.location.href = "index.html";
    return;
  }

  // Fetch user data
  const userRef = doc(db, "users", user.uid);
  const userSnap = await getDoc(userRef);

  if (!userSnap.exists()) {
    alert("User data not found!");
    await auth.signOut();
    window.location.href = "index.html";
    return;
  }

  const userData = userSnap.data();

  // Check role
  if (window.location.pathname.includes("admin.html") && userData.role !== "admin") {
    alert("Access Denied: Admins Only!");
    window.location.href = "dashboard.html"; // Redirect normal user
  }
});