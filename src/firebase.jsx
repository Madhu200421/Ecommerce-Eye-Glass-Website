import React from 'react'
// import Login from './Components/Pages/Login';
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import RegisterFrom from './Components/RegisterFrom';
import Login from './Components/Pages/Login';


const firebaseConfig = {
  apiKey: "AIzaSyC_7TGok0lT6kyi-mW-HxqiEpcNwesTlBg",
  authDomain: "nikhil2024-5e6e7.firebaseapp.com",
  projectId: "nikhil2024-5e6e7",
  storageBucket: "nikhil2024-5e6e7.appspot.com",
  messagingSenderId: "402801264166",
  appId: "1:402801264166:web:2245030f2cc0e8849d48e7"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
export {app, auth};


const App = () => {
  return (
    <>
     <RegisterFrom/>
    </>
  )
}

export default App;