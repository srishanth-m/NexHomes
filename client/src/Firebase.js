// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY ,
  authDomain: "mern-estate-6c73c.firebaseapp.com",
  projectId: "mern-estate-6c73c",
  storageBucket: "mern-estate-6c73c.appspot.com",
  messagingSenderId: "751654015144",
  appId: "1:751654015144:web:b2ba9f712e3e9826c8b29d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);