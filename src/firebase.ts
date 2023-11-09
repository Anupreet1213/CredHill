import { getAuth } from "firebase/auth";
import firebase from "firebase/compat/app";
import { getFirestore } from "firebase/firestore";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD6UsKzmhANTmjGBIHWIIeSy_XgcpOY3Ks",
  authDomain: "credhill-ff167.firebaseapp.com",
  projectId: "credhill-ff167",
  storageBucket: "credhill-ff167.appspot.com",
  messagingSenderId: "198235292628",
  appId: "1:198235292628:web:dfd7bc608227d7036a8c41",
  measurementId: "G-8Q2EJ6XM0Y"
};

const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getFirestore(app);
export default app;
