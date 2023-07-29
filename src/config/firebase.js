// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjutVgfzBN4SANXawFBruWAgzxKil0wuM",
  authDomain: "connectly-865cb.firebaseapp.com",
  projectId: "connectly-865cb",
  storageBucket: "connectly-865cb.appspot.com",
  messagingSenderId: "33753241506",
  appId: "1:33753241506:web:a7b6aa38089fefb23904fb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();