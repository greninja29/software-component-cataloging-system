// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPHPl-xrI1efpiiKmiqXaBLrI52RWKQNA",
  authDomain: "sccs-1be51.firebaseapp.com",
  projectId: "sccs-1be51",
  storageBucket: "sccs-1be51.appspot.com",
  messagingSenderId: "500217714374",
  appId: "1:500217714374:web:ebf1d68fbfc453ed3a69c7",
  measurementId: "G-GX93GZFPDF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
