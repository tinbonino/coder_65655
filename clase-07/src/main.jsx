import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import './index.css'
import Agregar from './Agregar.jsx';
import TraerCollection from './TraerCollection.jsx';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKgAneRbjOzY31QtgmYFgx6XRcen01qTM",
  authDomain: "coder-65655.firebaseapp.com",
  projectId: "coder-65655",
  storageBucket: "coder-65655.firebasestorage.app",
  messagingSenderId: "1067685694525",
  appId: "1:1067685694525:web:0fb4e5195df85eff82ae54"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    {/* <App /> */}
    {/* <Agregar/> */}
    <TraerCollection/>
  </>,
)
