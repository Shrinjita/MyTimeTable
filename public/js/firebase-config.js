// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvgUiRjdhvXMwdL0QQNHmSMqJnTcUG0xQ",
  authDomain: "project-todo-tracker.firebaseapp.com",
  projectId: "project-todo-tracker",
  storageBucket: "project-todo-tracker.firebasestorage.app",
  messagingSenderId: "795411393879",
  appId: "1:795411393879:web:da8d26448b559de6bf6212",
  measurementId: "G-KQJERB68L1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);