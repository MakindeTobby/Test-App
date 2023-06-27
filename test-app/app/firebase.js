// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
    apiKey: "AIzaSyDPQ6VnjWKISd7cNiWY4FCAujfvkiR8AvU",
    authDomain: "testapp-9a298.firebaseapp.com",
    projectId: "testapp-9a298",
    storageBucket: "testapp-9a298.appspot.com",
    messagingSenderId: "720522768859",
    appId: "1:720522768859:web:2c3b5f8c7d1746b636b7fe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
