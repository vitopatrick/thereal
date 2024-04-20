// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgCqFqwvh3qF9Kw2mF_VILf_0ZFmEXgpg",
  authDomain: "the-real-wrld.firebaseapp.com",
  projectId: "the-real-wrld",
  storageBucket: "the-real-wrld.appspot.com",
  messagingSenderId: "725923134949",
  appId: "1:725923134949:web:e51ea3a54ff1bf421b830c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const store = getFirestore(app)