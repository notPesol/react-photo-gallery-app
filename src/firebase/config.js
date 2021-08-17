// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";

import "firebase/firestore";
import "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyCmnK5D_6IeFDFu5LfeGh2as53rN278lxI",
  authDomain: "photo-gallery-app-457f3.firebaseapp.com",
  projectId: "photo-gallery-app-457f3",
  storageBucket: "photo-gallery-app-457f3.appspot.com",
  messagingSenderId: "419959917456",
  appId: "1:419959917456:web:6566ddd99cce3728d8c115",
  measurementId: "G-8FY9LW444Z"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

export {
  projectStorage,
  projectFirestore,
  timeStamp
};