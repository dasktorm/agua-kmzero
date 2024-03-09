// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6AEXGz8jvIjLu-Z179-pbdqlpkYx5Fwk",
  authDomain: "agua-kmzero-firebase.firebaseapp.com",
  projectId: "agua-kmzero-firebase",
  storageBucket: "agua-kmzero-firebase.appspot.com",
  messagingSenderId: "893358665554",
  appId: "1:893358665554:web:04fa1c4a586c95ae86948b",
  measurementId: "G-HKBJ43F8MN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);