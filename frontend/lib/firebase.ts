import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB7uYAqxoqsJF4Y10n5hxuNwhY9b1_ySrI",
  authDomain: "shop-1eb4d.firebaseapp.com",
  projectId: "shop-1eb4d",
  storageBucket: "shop-1eb4d.firebasestorage.app",
  messagingSenderId: "400720363989",
  appId: "1:400720363989:web:ce08afd6cd0594ebd7fd5c",
  measurementId: "G-F778T5DMR8"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);