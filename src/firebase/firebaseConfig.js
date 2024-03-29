import { getFirestore } from 'firebase/firestore';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBF4iAalojIK2Y_evRV3Xk3y0bC9eMW54w",
  authDomain: "huguitoproject.firebaseapp.com",
  projectId: "huguitoproject",
  storageBucket: "huguitoproject.appspot.com",
  messagingSenderId: "801794204607",
  appId: "1:801794204607:web:d78c0cc57adcd54562370a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);