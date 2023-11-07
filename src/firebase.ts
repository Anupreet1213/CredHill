import { getAuth } from "firebase/auth";
import firebase from "firebase/compat/app";
import { getFirestore } from "firebase/firestore";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDs_jRyHTppTqs5ttM8jeIqHRiR65ZDCPo",
  authDomain: "credhill-8259f.firebaseapp.com",
  projectId: "credhill-8259f",
  storageBucket: "credhill-8259f.appspot.com",
  messagingSenderId: "943997581042",
  appId: "1:943997581042:web:6bbdfce7c0cf95f17e426b",
  measurementId: "G-8W0FSZ2ZV8",
};

const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getFirestore(app);
export default app;
