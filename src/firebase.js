import firebase from "firebase";
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
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
