// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
 
const firebaseConfig = {
  apiKey: "AIzaSyDn-AJCOrWlsCd24x55hImGBsuExMCaUUc",
  authDomain: "temp-f79ac.firebaseapp.com",
  projectId: "temp-f79ac",
  storageBucket: "temp-f79ac.appspot.com",
  messagingSenderId: "33782977600",
  appId: "1:33782977600:web:f70bcf69d747a4bde6fba5"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIRESTORE_DB=getFirestore(FIREBASE_APP);
// export const FIREBASE_AUTH=getAuth(FIREBASE_APP);