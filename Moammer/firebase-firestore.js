import { getFirestore, collection, getDocs, addDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
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

document.addEventListener("DOMContentLoaded", function() {
    const inputFields = document.querySelectorAll('input[type="text"]');

    inputFields.forEach(function(input) {
        input.addEventListener('focus', function() {
            input.style.borderColor = '#71A5DE';
        });

        input.addEventListener('input', function() {
            if (input.value === '') {
                input.style.borderColor = '#62626C';
            } else {
                input.style.borderColor = '#71A5DE';
            }
        });

        input.addEventListener('blur', function() {
            if (input.value === '') {
                input.style.borderColor = '#62626C';
            }
        });
    });

    const form = document.querySelector('form');
    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        const nickname = document.getElementById('id_input').value;
        const genderElement = document.querySelector('input[name="gender_input"]:checked');
        if (!genderElement) {
            alert("성별을 선택해주세요.");
            return;
        }
        const gender = genderElement.value;
        const age = document.getElementById('age').value;
        const height = document.getElementById('tall').value;
        const startWeight = document.getElementById('start_weight').value;
        const targetWeight = document.getElementById('present_weight').value;

        try {
            const docRef = await addDoc(collection(db, "users"), {
                nickname: nickname,
                gender: gender,
                age: age,
                height: height,
                startWeight: startWeight,
                targetWeight: targetWeight
            });
            console.log("Document written with ID: ", docRef.id);
            alert("Data saved successfully!");
            window.location.href = "display.html"; // 새 페이지로 이동
        } catch (e) {
            console.error("Error adding document: ", e);
            alert("Error saving data. Please try again. \n" + e.message);
        }
    });
});
