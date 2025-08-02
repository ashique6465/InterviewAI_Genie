// Import the functions you need from the SDKs you need
import { initializeApp, getApp,getApps } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDzy16LlVn8cDv0loefhS9L871-TCEYGBg",
  authDomain: "igenie-4c43d.firebaseapp.com",
  projectId: "igenie-4c43d",
  storageBucket: "igenie-4c43d.firebasestorage.app",
  messagingSenderId: "964577664148",
  appId: "1:964577664148:web:5145fd361641fc8bcfe881",
  measurementId: "G-EN7ZS59FX9"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);