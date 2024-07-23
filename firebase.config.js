import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, getDocs, updateDoc, doc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD03HhbFeL0bNtj2e9tt8vQcMk9mlMto_c",
    authDomain: "final-year-ba148.firebaseapp.com",
    projectId: "final-year-ba148",
    storageBucket: "final-year-ba148.appspot.com",
    messagingSenderId: "137391846086",
    appId: "1:137391846086:web:91103984f243e6341addc7"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc, getDocs, doc }; 
