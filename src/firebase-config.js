// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCT3U_m31jQy6XGag4TsCtJMCQv_sbgmR0",
  authDomain: "milmar-2025.firebaseapp.com",
  projectId: "milmar-2025",
  storageBucket: "milmar-2025.firebasestorage.app",
  messagingSenderId: "630767417024",
  appId: "1:630767417024:web:de47fc3817e80c37229f25",
  measurementId: "G-6ZRPB2ZH3R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);