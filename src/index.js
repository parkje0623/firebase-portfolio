// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbbk3PpO7GZhHB6vRP16PSdhjcHrF9soU",
  authDomain: "portfolio-f73b5.firebaseapp.com",
  projectId: "portfolio-f73b5",
  storageBucket: "portfolio-f73b5.appspot.com",
  messagingSenderId: "1039460283484",
  appId: "1:1039460283484:web:86ab52b4b950808933e299",
  measurementId: "G-65X40T9ZTB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);