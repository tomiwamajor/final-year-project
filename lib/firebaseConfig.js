import { initializeApp } from "firebase/app";
import {getAuth, signInWithPopup} from "firebase/auth";
import { Firestore, getFirestore } from "firebase/firestore";
import {getDatabase} from "firebase/database"

const firebaseConfig = {
    apiKey: "AIzaSyD03HhbFeL0bNtj2e9tt8vQcMk9mlMto_c",
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  };

  const app = initializeApp(firebaseConfig);

  export const auth =getAuth(app);
  const db = getFirestore(app);
  export const realTimeDb = getDatabase(app);
  export {signInWithPopup}

  export {db};

  export default app;