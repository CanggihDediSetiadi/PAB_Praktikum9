import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";
const firebaseConfig = {
  apiKey: "AIzaSyBKbcCsr_v9IUorh1aWnPUOPQWzTHI5Ghk",
  authDomain: "projekfirebase-fb1e6.firebaseapp.com",
  databaseURL:
    "https://projekfirebase-fb1e6-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "projekfirebase-fb1e6",
  storageBucket: "projekfirebase-fb1e6.firebasestorage.app",
  messagingSenderId: "231895603470",
  appId: "1:231895603470:web:d745dc67b2a1febe801f5f",
};
// Prevent duplicate initialization
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const FIREBASE = firebase;

export default FIREBASE;
