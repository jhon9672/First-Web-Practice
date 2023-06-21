// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQbpt4iq5p4Bcg6JDcDlKtOose-J76FPo",
  authDomain: "fir-login-7ae9f.firebaseapp.com",
  projectId: "fir-login-7ae9f",
  storageBucket: "fir-login-7ae9f.appspot.com",
  messagingSenderId: "1087124980799",
  appId: "1:1087124980799:web:ab071db4279656dfa7248a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);