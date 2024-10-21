// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxrkZqR547hhI_zSjRdNmrdYaFGAkJzaM",
  authDomain: "netflixgpt-ccee2.firebaseapp.com",
  projectId: "netflixgpt-ccee2",
  storageBucket: "netflixgpt-ccee2.appspot.com",
  messagingSenderId: "388076007405",
  appId: "1:388076007405:web:7cc4941c3778eb60e741e4",
  measurementId: "G-TTFT3Z68DJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);




export const auth = getAuth();