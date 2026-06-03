import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";

import {
    getAuth,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

import {
    getFirestore,
    collection,
    addDoc,
    serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyAIwpE-5gAD8xmKYeA1H44H_lbwmpSf90I",
    authDomain: "asfahas-barbershop.firebaseapp.com",
    projectId: "asfahas-barbershop",
    storageBucket: "asfahas-barbershop.firebasestorage.app",
    messagingSenderId: "805820153780",
    appId: "1:805820153780:web:808d1c4996d9152abafce1"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const loginBox = document.getElementById("loginBox");
const adminPanel = document.getElementById("adminPanel");

const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const loginBtn = document.getElementById("loginBtn");
const logoutBtn = document.getElementById("logoutBtn");
const testFirestoreBtn = document.getElementById("testFirestoreBtn");

const loginMessage = document.getElementById("loginMessage");
const adminMessage = document.getElementById("adminMessage");

loginBtn.addEventListener("click", async () => {
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    loginMessage.textContent = "";

    if (!email || !password) {
        loginMessage.textContent = "Fyll i e-post och lösenord.";
        return;
    }

    try {
        await signInWithEmailAndPassword(auth, email, password);
        loginMessage.textContent = "";
    } catch (error) {
        loginMessage.textContent = "Fel e-post eller lösenord.";
        console.error(error);
    }
});

logoutBtn.addEventListener("click", async () => {
    try {
        await signOut(auth);
    } catch (error) {
        console.error(error);
    }
});

testFirestoreBtn.addEventListener("click", async () => {
    adminMessage.textContent = "Testar Firebase...";

    try {
        await addDoc(collection(db, "adminTests"), {
            message: "Firebase connection works",
            createdAt: serverTimestamp()
        });

        adminMessage.textContent = "Firebase funkar. Test sparat i Firestore.";
    } catch (error) {
        adminMessage.textContent = "Firebase-test misslyckades.";
        console.error(error);
    }
});

onAuthStateChanged(auth, (user) => {
    if (user) {
        loginBox.classList.add("hidden");
        adminPanel.classList.remove("hidden");
    } else {
        loginBox.classList.remove("hidden");
        adminPanel.classList.add("hidden");
    }
});