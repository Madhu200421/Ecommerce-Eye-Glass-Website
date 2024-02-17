import React from 'react';
import './Contactus.css';
import Footer from './Footer';
const Contactus=()=>{
    return (
        <>
     <div className='conform'>
     <div className="wrapper10">
            <h2 className='contact'>Contact us</h2>
        <form>
       <div className="input_box">
            <label id="user">Firstname: *</label> <br></br>
             <input type="text" id="user"  /><br></br>
             </div><br></br>
            
             <div className="input_box">
             <label id="pass">Email Address: * </label><br></br>
             <input type="email" id="email" /><br></br><br></br>
             </div><br></br>

        <div className='input_box'>
       <label >Comments or Message</label>
                    <textarea id="w3review" name="w3review" rows="4" cols="40"></textarea>
                    <input type="submit" id="submit2" name="SUBMIT" />
        </div><br></br><br></br>
          
      
          

          
             </form>
          
             </div>    

             </div>
       
      
          <div className='footer-con50'>
            <Footer></Footer>
          </div>
          
        </>
    )
}


export default Contactus;