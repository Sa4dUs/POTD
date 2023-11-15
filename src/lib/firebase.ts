// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdpX91WT3KB31vY3yqDqVQh-aMS6ZMmnw",
  authDomain: "pokemonwordle.firebaseapp.com",
  projectId: "pokemonwordle",
  storageBucket: "pokemonwordle.appspot.com",
  messagingSenderId: "822372437026",
  appId: "1:822372437026:web:fe18594da47ab334214e7b",
  measurementId: "G-V8RMSC38B6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);