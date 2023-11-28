// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3QWnIsKBO8-c0w9LWNCXqzNVcpHgtd0Y",
  authDomain: "plantnet-d209c.firebaseapp.com",
  projectId: "plantnet-d209c",
  storageBucket: "plantnet-d209c.appspot.com",
  messagingSenderId: "527488320175",
  appId: "1:527488320175:web:ffa300486d04fe7e22ca5a",
  measurementId: "G-RH14LYK40M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);