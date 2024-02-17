import React, { useState } from 'react';
import './Pages/Login.css';
import './RegisterFrom.css';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { app, auth } from '../firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Footer'; 

const RegisterFrom = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    pass: ""
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = (e) => {
    e.preventDefault();

    if (!values.name || !values.email || !values.pass) {
      setErrorMsg(toast.error("Error: Please provide a valid email address.", { position: "top-center", style: { background: '#721c24', color: '#f8d7da' }, className: 'custom-toast-container1' }));
      return;
    }

    setErrorMsg("");
    setSubmitButtonDisabled(true);

    createUserWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        const user = res.user;
        if (user) {
          await updateProfile(user, {
            displayName: values.name,
          }).catch((updateError) => {
            console.error('Error updating user profile:', updateError.message);
          });
        }
        setSubmitButtonDisabled(false);

        // Display success toast message
        toast.success("Registration successful!", { position: "top-center", style: { background: '#28a745', color: '#fff' }, className: 'custom-toast-container1' });

        // Continue with other logic...
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);

        if (err.code === 'auth/email-already-in-use') {
          setErrorMsg(toast.error("Error: This email is already in use.", { position: "top-center", style: { background: '#721c24', color: '#f8d7da' }, className: 'custom-toast-container1' }));
        } else {
          setErrorMsg(err.message);
        }
      });
  };

  return (
    <>
      <div className="wrapperr">
        <h2>Register</h2>
        <form>
          <div className="input_boxes">
            <label>Username*</label><br />
            <input type="text" required onChange={(event) => setValues((prev) => ({ ...prev, name: event.target.value }))} /><br />
          </div>
          <div className="input_boxes">
            <label>Email address*</label><br />
            <input type="email" required onChange={(event) => setValues((prev) => ({ ...prev, email: event.target.value }))} /><br />
          </div>
          <div className="input_boxes">
            <label>Password*</label><br />
            <input type="password" required onChange={(event) => setValues((prev) => ({ ...prev, pass: event.target.value }))} /><br />
          </div>
          <p>{errorMsg}</p>
          <div className="content">
           
            <h6 className='strong'>Strong</h6> <p className='stro'>Your personal data will be used to support your experience throughout
              this website, to manage access to your account, and for other
              purposes described in our privacy policy.</p>
          </div>
          <input type="submit" id="submit" name="SUBMIT" value="Register" disabled={submitButtonDisabled} onClick={handleSubmission} />
        </form>
      </div>
      <div className='footer-con100'>
      <Footer></Footer>
      </div>

    </>
  );
};

export default RegisterFrom;