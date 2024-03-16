// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6Ze6oJHJ4f4aKD-r3h833AnqYYTrLRHU",
  authDomain: "react-course-social-media-app.firebaseapp.com",
  projectId: "react-course-social-media-app",
  storageBucket: "react-course-social-media-app.appspot.com",
  messagingSenderId: "210757609249",
  appId: "1:210757609249:web:dad795aa2bce73a9d94060"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);