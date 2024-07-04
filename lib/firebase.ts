// lib/firebase.ts
import { initializeApp, getApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCkwqnaZ4rZXP01u360WYu9bGDw0vA7LJ8",
    authDomain: "thesocial-3e628.firebaseapp.com",
    projectId: "thesocial-3e628",
    storageBucket: "thesocial-3e628.appspot.com",
    messagingSenderId: "1056689793697",
    appId: "1:1056689793697:web:0321dc3da5ec4bcd0a5ee0",
    measurementId: "G-ST25NB75TM"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);

export { auth };
