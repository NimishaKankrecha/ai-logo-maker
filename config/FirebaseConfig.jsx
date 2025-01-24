// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';


const firebaseConfig = {
    apiKey: process.env.NEXT_FIREBASE_PUBLIC_API_KEY,
    authDomain: "trip-71992.firebaseapp.com",
    projectId: "trip-71992",
    storageBucket: "trip-71992.firebasestorage.app",
    messagingSenderId: "430898990587",
    appId: "1:430898990587:web:3db4dbca1294237167cf5e",
    measurementId: "G-G4HZL4QNG5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
