// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'


const firebaseConfig = {
    apiKey: "AIzaSyD2fFro448NgCMuR8ZrQBP2iT5l3qoSdmg",
    authDomain: "learn-189ba.firebaseapp.com",
    projectId: "learn-189ba",
    storageBucket: "learn-189ba.appspot.com",
    messagingSenderId: "9257843948",
    appId: "1:9257843948:web:dfa51db592a39a0d5379c9",
    measurementId: "G-TQWCCB47FP"
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const database = getFirestore(app);
export const storage = getStorage(app)