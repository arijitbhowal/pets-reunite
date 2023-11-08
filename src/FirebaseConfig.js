// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrZpGfMU9ueQ5f4egAIW1a66TASU5ZK9w",
  authDomain: "pet-reunite.firebaseapp.com",
  projectId: "pet-reunite",
  storageBucket: "pet-reunite.appspot.com",
  messagingSenderId: "663665788908",
  appId: "1:663665788908:web:40b19891bb52b58615e2c9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);