import React from "react";
import './Form.css';
import { useState } from "react";
import {App, auth } from "../../firebase";
import {signInWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../Footer';
const Form=()=>{
    const [values, setValues]=useState({
        email:"",
        pass:""
    })
    const [errorMsg,setErrorMsg]=useState("")
    const [submitButtonDisabled,setSubmitButtonDisabled]=useState(false);
    const handleSubmission = () =>{
        if( !values.email ||!values.pass){
            setErrorMsg(toast.error("Error:Please provide a valid email address.",{position:"top-center",style: {
                background: '#721c24', // Dark background color for error toast
                color: '#f8d7da', // Light text color for error toast
              },className: 'custom-toast-container1',}));
            return;
        }
        setErrorMsg("");
        toast.error("Thank you for your registration. Your account has to be activated before you can login. please check your email.",{position:"top-left",style: {
            background: '#721c24', // Dark background color for error toast
            color: '#f8d7da', // Light text color for error toast
          },className: 'custom-toast-container',});
        setSubmitButtonDisabled(true);
        signInWithEmailAndPassword(auth,values.email,values.pass)
        .then(async(res)=>{
            setSubmitButtonDisabled(false);
            // console.log(user);
        }).catch((err)=>{
            setSubmitButtonDisabled(false);
            if(err.code ==='auth/invalid-credential'){
                setErrorMsg(toast.error("Error: check your password.",{position:"top-center",style:{background:'#721c24', color:'#f8d7da' ,className:'custom-toast-container1'}}))
            }else{
            setErrorMsg(err.message);
            }
        });
    }
    return (
        <>
        
        <div className="wrapper50">
           
        <form>
            
       <div className="input_box">
            <label id="user">Username or Email address: *</label> <br></br>
             <input type="text" id="user" onChange={(event)=>setValues((prev)=>({...prev,email:event.target.value}))} required/><br></br>
             </div>
             <div className="input_box">
             <label id="pass">Password: * </label><br></br>
             <input type="password" id="pass" onChange={(event)=>setValues((prev)=>({...prev,pass:event.target.value}))} required/><br></br><br></br>
             </div>

           <div className="rem-for">
             <label><input type="checkbox" />Remember me</label>
             <a href="home.html">Lost Your Password?</a>
             </div>
            <b>{errorMsg}</b>
       
       
             <input type="submit" id="submit" name="SUBMIT" disabled={submitButtonDisabled} onClick={handleSubmission}/>

            
             </form>
             
             </div>    

               { <ToastContainer/>    }
               <div className='footer-con50'>
            <Footer></Footer>
          </div>
</>
    )
}

export default Form;