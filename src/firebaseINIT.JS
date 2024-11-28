// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbBCQFT8k5ICg6IHGYDNcoLlzkIGumfgw",
  authDomain: "bike-zone-auth.firebaseapp.com",
  projectId: "bike-zone-auth",
  storageBucket: "bike-zone-auth.firebasestorage.app",
  messagingSenderId: "291918733993",
  appId: "1:291918733993:web:86cd1452a2d0022277ffb8",
  measurementId: "G-ZTSHYWQ5E8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;

