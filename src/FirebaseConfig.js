// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, updateProfile} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage , ref, uploadBytes, getDownloadURL} from "firebase/storage";
import { get } from "jquery";
import { useState, useEffect } from "react"; 
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
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage=getStorage(app);

//Custom Hook
export function useAuth(){
  const [currentUser,setCurrentUser]=useState();
  useEffect(()=>{
    const unsub=auth.onAuthStateChanged(user=>{
      setCurrentUser(user);
    });
    return unsub;
  },[]);

  return currentUser;
}

//Storage
export async function upload(file, currentUser, setLoading){
    const fileRef = ref(storage, `images/${currentUser.uid}${file.name}`);
    setLoading(true);
    const snapshot= await uploadBytes(fileRef, file);

    const photoURL = await getDownloadURL(fileRef);
    updateProfile(currentUser, {photoURL})
    setLoading(false);
    alert("Upload Successful");
}