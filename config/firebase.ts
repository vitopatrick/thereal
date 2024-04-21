// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBirwZkrgciO7tb55ntNE6e-jblkn_VeXY",
  authDomain: "the-real-world-c1527.firebaseapp.com",
  projectId: "the-real-world-c1527",
  storageBucket: "the-real-world-c1527.appspot.com",
  messagingSenderId: "970083733597",
  appId: "1:970083733597:web:673c668130aae73322bdb4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const store = getFirestore(app)