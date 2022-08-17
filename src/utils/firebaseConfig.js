// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSuhbMhfMKs2BRrArIT_TgGUZNuKNlv6A",
  authDomain: "skulls-and-demons-ecommerce.firebaseapp.com",
  projectId: "skulls-and-demons-ecommerce",
  storageBucket: "skulls-and-demons-ecommerce.appspot.com",
  messagingSenderId: "749395492776",
  appId: "1:749395492776:web:1686dc25bd5334ec3f279d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db