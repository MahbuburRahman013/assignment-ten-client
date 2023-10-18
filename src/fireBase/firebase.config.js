// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5_RtlV2Dtlg5LiOv6-AGyxgopOpzxLD4",
  authDomain: "assignment-ten-5f328.firebaseapp.com",
  projectId: "assignment-ten-5f328",
  storageBucket: "assignment-ten-5f328.appspot.com",
  messagingSenderId: "460499023942",
  appId: "1:460499023942:web:f9525578f0e0347888b247"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;