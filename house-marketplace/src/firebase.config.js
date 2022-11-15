import { initializeApp } from "firebase/app";
import {getFirestore, getStore} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNFA5W1gqSkrrRMAKl8CHSEzZgTT2oFTM",
  authDomain: "house-marketplace-app-37171.firebaseapp.com",
  projectId: "house-marketplace-app-37171",
  storageBucket: "house-marketplace-app-37171.appspot.com",
  messagingSenderId: "740182990639",
  appId: "1:740182990639:web:aff395d22dd0d50e2a4bda"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)