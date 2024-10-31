// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";




const firebaseConfig = {
  apiKey: "AIzaSyCOCn_hvjnPQ3z-bXFNG9y5nHyybnQl7TE",
  authDomain: "taskapp-f1f68.firebaseapp.com",
  projectId: "taskapp-f1f68",
  storageBucket: "taskapp-f1f68.appspot.com",
  messagingSenderId: "516948817664",
  appId: "1:516948817664:web:f735af0a38699d4e2265e5",
  measurementId: "G-8E895N9XZY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);


