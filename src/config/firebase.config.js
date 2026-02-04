// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBOrwtmCC_dZz9z8mcCoIWqyeZvR8n_2wg",
  authDomain: "chat-app-1a771.firebaseapp.com",
  projectId: "chat-app-1a771",
  storageBucket: "chat-app-1a771.firebasestorage.app",
  messagingSenderId: "910563451741",
  appId: "1:910563451741:web:fe6976d1b901e2bf073eb4",
  measurementId: "G-6B4064W03Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);