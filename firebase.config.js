import { initializeApp } from 'firebase/app';
// import { getFirestore, collection, addDoc, getDocs, updateDoc, doc } from 'firebase/firestore';
import {getAuth, signInWithPopup} from "firebase/auth";
import { Firestore, getFirestore } from "firebase/firestore";
import {getDatabase} from "firebase/database"
const firebaseConfig = {
  apiKey: "AIzaSyC7Q7bU01oGcdaj0Q7s1dl6xwo2Rj8NiVo",
  authDomain: "project-backup-38c2a.firebaseapp.com",
  projectId: "project-backup-38c2a",
  storageBucket: "project-backup-38c2a.appspot.com",
  messagingSenderId: "512961077474",
  appId: "1:512961077474:web:5e831f95fdd5b4425a7ebb"
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