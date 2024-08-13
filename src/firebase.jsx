import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBnmauRGU0f741D0B6ogZKWGWVq3w-xpxA",
  authDomain: "fb-crud-93039.firebaseapp.com",
  projectId: "fb-crud-93039",
  storageBucket: "fb-crud-93039.appspot.com",
  messagingSenderId: "892925279811",
  appId: "1:892925279811:web:7528431bf56f83146c5ef6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);