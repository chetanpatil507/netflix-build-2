// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCF7oLiVFOnpbeHnOQ1tXTP553EqyozX8",
  authDomain: "netflix-clone-2cc6e.firebaseapp.com",
  projectId: "netflix-clone-2cc6e",
  storageBucket: "netflix-clone-2cc6e.appspot.com",
  messagingSenderId: "853141113155",
  appId: "1:853141113155:web:3cef172ea0153b5a2dc7f6",
  measurementId: "G-0QQES71VGX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore();
const auth = getAuth();

export { auth };
export default db;
