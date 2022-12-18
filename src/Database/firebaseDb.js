// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcwQcqVQUb9t3dc9pD4V7fsDuWiz77OY8",
  authDomain: "gametime-61320.firebaseapp.com",
  projectId: "gametime-61320",
  storageBucket: "gametime-61320.appspot.com",
  messagingSenderId: "1095636559154",
  appId: "1:1095636559154:web:e75959f3c42157189fe32b",
  measurementId: "G-H96FJF7077"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);