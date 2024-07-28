import { initializeApp } from 'firebase/app';
// import { getFirestore, collection, addDoc, getDocs, updateDoc, doc } from 'firebase/firestore';
import {getAuth, signInWithPopup} from "firebase/auth";
import { Firestore, getFirestore } from "firebase/firestore";
import {getDatabase} from "firebase/database"
const firebaseConfig = {
    apiKey: "AIzaSyD03HhbFeL0bNtj2e9tt8vQcMk9mlMto_c",
    authDomain: "final-year-ba148.firebaseapp.com",
    projectId: "final-year-ba148",
    storageBucket: "final-year-ba148.appspot.com",
    messagingSenderId: "137391846086",
    appId: "1:137391846086:web:91103984f243e6341addc7"
  };

const app = initializeApp(firebaseConfig);

export const auth =getAuth(app);
  const db = getFirestore(app);
  export const realTimeDb = getDatabase(app);
  export {signInWithPopup}

  export {db};

export default app;
// const db = getFirestore(app);

// export { db, collection, addDoc, getDocs, doc }; 