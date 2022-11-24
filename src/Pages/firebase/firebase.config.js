// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKAx2yhyB9aslB9-H85_jQ9WuW-2_oXpk",
  authDomain: "reseller-site.firebaseapp.com",
  projectId: "reseller-site",
  storageBucket: "reseller-site.appspot.com",
  messagingSenderId: "411225813102",
  appId: "1:411225813102:web:651fdf622fc15939a9767f",
  measurementId: "G-WRH34NXPF5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export default app;