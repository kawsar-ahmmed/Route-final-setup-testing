// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMzQGkqAwd9WqDE9up7d0BdrT9DnElId4",
  authDomain: "ema-john-simple-91221.firebaseapp.com",
  projectId: "ema-john-simple-91221",
  storageBucket: "ema-john-simple-91221.appspot.com",
  messagingSenderId: "953476237980",
  appId: "1:953476237980:web:268af68b01463cc3e87b59"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;