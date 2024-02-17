
import './Paymentform.css';
import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import Login from './Pages/Login';
import Footer from './Footer';
const Paymentform = () => {
    const [check,setCheck]=useState(false);
    const handleChange=()=>{
        console.log(check);
        check?setCheck(false):setCheck(true);
    }
    return (
        <>
            <div className='pay'>
            <NavLink to="/Form" style={{ textDecoration: 'none' }}>
             <p className='retu'>Returning customer?<p className='link'>Click here to Login</p></p>
             </NavLink>
             <NavLink to="/Coupon" style={{ textDecoration: 'none' }}>
                <p className='cou'>Have a Coupon?<p className='link2'>Click here to apply code</p></p>
                </NavLink>
            </div>

            <form className="your-form">
                <div className="form-group">
                    <label htmlFor="firstName">First Name:</label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name:</label>
                    <input
                        type="text"
                        className="lastName"
                        name="lastName"
                    />
                </div><br></br>
                <div className='Company'>
                    <label className='comp'>Company name(optional)</label>
                    <input type="text" className='inp'/>
                </div>
                <div className='country'>
                    <label className='countr'>Country/Region*</label>
                    <input type="text" className='coun'/>
                </div>
                <div className='addd'>
                    <label className='address'>Street add*</label>
                    <input type="text" className='addr' placeholder="House number and street name"/><br></br><br></br>
                    <input type="text" className='addr' placeholder="Apartment,suite,unit(optional)"/>
                </div>

                <div className='town'>
                    <label className='townn'>Town/city*</label>
                   <input type="text"/>
                </div>
                <div className='code'>
                    <label className='post'>Postcode/ZIP*</label>
                    <input type="text" />
                </div>
                <div className='emai'>
                    <label className='emaii'>Email add*</label>
                    <input type="email"/>
                </div>
                <div className='phone'>
                    <label className='pho'>Phone*</label>
                    <input type="text" className='phon'/>
                    </div>

                    
                <div className="form-group2">
                    <label htmlFor="firstName">Create Username:</label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        placeholder='Username'
                    />
                </div>
                <div className="form-group3">
                    <label htmlFor="lastName">Create Password:</label>
                    <input
                        type="text"
                        className="lastName"
                        name="lastName"
                        placeholder='Password'
                    />
                </div>
               
                <div className='form-group4'>
                    <div className={check?"d-flex transfer":"d-flex"}>
                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" onChange={handleChange}></input>
                       <NavLink to="/Form" style={{ textDecoration: 'none' }}><label for="vehicle1" className='deli'> Deliver to a different Address? </label></NavLink> 
                    </div>
                    <div className={check?"wrapper is-open":" wrapper"}>
                        <div>
                        <div className="inner">
           
                        
          
               </div>
               
                        </div>
                        </div>
                    </div>
                    
           
              

              
            </form>
          <div className='footer-con50'>
            <Footer></Footer>
          </div>
        </>
    )
}

export default Paymentform;