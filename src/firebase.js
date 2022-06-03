

import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyBNksHaQWkC-AHNWSatxe4Wvti6mCn4N-U",
  authDomain: "asset-data-ee093.firebaseapp.com",
  projectId: "asset-data-ee093",
  storageBucket: "asset-data-ee093.appspot.com",
  messagingSenderId: "371352965351",
  appId: "1:371352965351:web:86d1f24468088594f15242",
  measurementId: "G-NTQJ727E4Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app) 