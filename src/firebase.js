// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDVJAk_TJ3rerpSzLKPDiTdDyaC2MUeGGg",
  authDomain: "chat-4f9ed.firebaseapp.com",
  projectId: "chat-4f9ed",
  storageBucket: "chat-4f9ed.appspot.com",
  messagingSenderId: "667706333834",
  appId: "1:667706333834:web:daaf89f2aa21f66a502b73",
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
