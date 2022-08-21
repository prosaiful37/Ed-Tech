// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGbxtxe9xAw3i9mvF2_KnUumHjDMuuKE0",
  authDomain: "ed-tech-e3aea.firebaseapp.com",
  projectId: "ed-tech-e3aea",
  storageBucket: "ed-tech-e3aea.appspot.com",
  messagingSenderId: "681327469860",
  appId: "1:681327469860:web:f6d056d25633f2be69bfb1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth(app)

export default auth;