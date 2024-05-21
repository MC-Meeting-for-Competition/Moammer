import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";

// Firebase 설정
const firebaseConfig = {
  apiKey: "AIzaSyCmQfkSz7ormdtVfQigqDVorK41uGOUPVs",
  authDomain: "sign-237bc.firebaseapp.com",
  projectId: "sign-237bc",
  storageBucket: "sign-237bc.appspot.com",
  messagingSenderId: "789190861460",
  appId: "1:789190861460:web:2d9314aa06d4014189ca81",
  measurementId: "G-1SDJRVV2CB"
};

// Firebase 초기화
initializeApp(firebaseConfig);
const db = getFirestore();

document.addEventListener("DOMContentLoaded", async () => {
  const usersList = document.getElementById('users-list');

  try {
    const querySnapshot = await getDocs(collection(db, "users"));
    const users = [];

    querySnapshot.forEach(doc => {
      users.push(doc.data());
    });

    users.sort((a, b) => a.nickname.localeCompare(b.nickname));

    usersList.innerHTML = '';
    users.forEach(({ nickname, gender, age, height, startWeight, targetWeight }) => {
      const userItem = document.createElement('li');
      userItem.textContent = `Nickname: ${nickname}, Gender: ${gender}, Age: ${age}, Height: ${height}, Start Weight: ${startWeight}, Target Weight: ${targetWeight}`;
      usersList.appendChild(userItem);
    });
  } catch (e) {
    console.error("Error fetching documents: ", e);
    alert("데이터를 가져오는 중 오류가 발생했습니다. 다시 시도해 주세요. \n" + e.message);
  }
});
