import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDvfv5NfVwP4aPT1uj9XmX320w3z87YS2c",
  authDomain: "stickyfingers-1.firebaseapp.com",
  projectId: "stickyfingers-1",
  storageBucket: "stickyfingers-1.firebasestorage.app",
  messagingSenderId: "594568622178",
  appId: "1:594568622178:web:70401f0013d6844bcf613b"
};



const app = initializeApp(firebaseConfig);

const db= getFirestore();

export default db;