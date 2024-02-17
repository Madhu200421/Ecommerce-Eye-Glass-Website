
import React from 'react';
import './Footer.css';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import lastlogo from './lastlogo.png'
import { NavLink, Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
const Footer=()=>{

    return (
        <>
         <div className='footer'>
            <div className='row'>
                <div className='col'>
                <h3 className='heading1'>Frames</h3>
                <ul className='list'>
                    <div>
                    <Link to="/Footerpg1" style={{ textDecoration: 'none' }} ><li>Men</li></Link>
                    </div>
                    <NavLink to="/Footerpg2"  style={{ textDecoration: 'none' }}><li>Women</li></NavLink>
                    <NavLink to="/Kids" style={{ textDecoration: 'none' }}><li>Kids</li></NavLink>
                </ul>
                <h3 className='heading1'>Sunglass</h3>
                <ul className='list'>
                    <NavLink to="/Footerpg1" style={{ textDecoration: 'none' }}><li>Men</li></NavLink>
                    <NavLink to="/Footerpg2"  style={{ textDecoration: 'none' }}><li>Women</li></NavLink>
                    <NavLink to="/Kids" style={{ textDecoration: 'none' }}><li>Kids</li></NavLink>
                </ul>
                <NavLink to="/Contactlens" style={{ textDecoration: 'none' }}><h3 className='heading1' >Contact Lens</h3>  </NavLink>

                </div>

                <div className='col'>
            <h3 className='heading2'>Useful Links</h3>
            <ul className='list2'>
                <NavLink to="/Aboutus" style={{ textDecoration: 'none' }}><li>About Us</li></NavLink>
                <NavLink to="/Storelocator" style={{ textDecoration: 'none' }}><li>Store Locator</li></NavLink>
                <NavLink to="/Privacypolicy"  style={{ textDecoration: 'none' }}><li>Privacy Policy</li></NavLink>
                <NavLink to="/Contactus" style={{ textDecoration: 'none' }}><li>Contact Us</li></NavLink>
                <NavLink to="/Privacypolicy"  style={{ textDecoration: 'none' }}><li>Terms & Conditions</li></NavLink>
                <NavLink to="/Refund" style={{ textDecoration: 'none' }}><li>Returns & Refund Policy</li></NavLink>
            </ul>
            <h3 className='heading2'>Contact</h3>
          
           <FontAwesomeIcon icon={faEnvelope} className='iconss'/>
           <p className='email'>info@trivinieyeplus.com</p>
           <FontAwesomeIcon icon={faPhone} className='iconss2'/>
           <p className='num'>05332359546</p>
                </div>

                <div className='col'>
                <h3 className='heading3'>About Triveni Eye +</h3>
                <p className='eye'>Tiriveni Eye+, the third major line of consumer 
                 business division from Titan Company Limited, 
                 ventured into the eyewear category in March 2007.
                 The move was an initiative to redefine the industry 
                and straddle the marketplace with exacting quality 
                 standards, unparalleled in India’s prescription 
                eyewear industry. Benchmarked against the best in 
                the world, Triveni Eye+ heralds standardization in
               the eyewear industry.
                    </p>
                    <img src={lastlogo} alt="/"></img>
                </div>

                </div>
                </div>
        </>
    )
}


export default Footer;