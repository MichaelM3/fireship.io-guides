// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAH673D_h9KC-rVsBILWuGhGMKZ2MVsRFY",
  authDomain: "nextfire-app-c4513.firebaseapp.com",
  projectId: "nextfire-app-c4513",
  storageBucket: "nextfire-app-c4513.appspot.com",
  messagingSenderId: "862752597113",
  appId: "1:862752597113:web:487aefab1e7c576dd760a8",
  measurementId: "G-22DQYY9HV2"
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
export const auth = firebase.auth()
export const firestore = firebase.firestore() 
export const storage = firebase.storage() 
