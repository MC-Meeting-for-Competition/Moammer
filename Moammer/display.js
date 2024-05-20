import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmQfkSz7ormdtVfQigqDVorK41uGOUPVs",
  authDomain: "sign-237bc.firebaseapp.com",
  projectId: "sign-237bc",
  storageBucket: "sign-237bc.appspot.com",
  messagingSenderId: "789190861460",
  appId: "1:789190861460:web:2d9314aa06d4014189ca81",
  measurementId: "G-1SDJRVV2CB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

document.addEventListener("DOMContentLoaded", async function() {
  const usersList = document.getElementById('users-list');

  async function fetchAndDisplayData() {
    const usersCollection = collection(db, "users");
    try {
      const querySnapshot = await getDocs(usersCollection);
      usersList.innerHTML = '';
      querySnapshot.forEach((doc) => {
        const userData = doc.data();
        const userItem = document.createElement('li');
        userItem.textContent = `Nickname: ${userData.nickname}, Gender: ${userData.gender}, Age: ${userData.age}, Height: ${userData.height}, Start Weight: ${userData.startWeight}, Target Weight: ${userData.targetWeight}`;
        usersList.appendChild(userItem);
      });
    } catch (e) {
      console.error("Error fetching documents: ", e);
      alert("Error fetching data. Please try again. \n" + e.message);
    }
  }

  fetchAndDisplayData();
});
