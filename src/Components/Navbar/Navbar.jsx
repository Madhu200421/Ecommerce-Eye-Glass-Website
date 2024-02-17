import React from 'react';
import './Navbar.css';
import WEBLOGO from '../Assests/WEBLOGO.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faSearch, faHeart, faUser,faUsers, faBars, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  const [side,setSide]=useState(false);
  
  const handleClick = () => {
    side?setSide(false):setSide(true);
  }
  const handleSideClose=()=>{
    setSide(false);
  }
  return (
    <>
      <Sidebar sideClose={handleSideClose} side={side}/>
      <nav className="navbar">
        <div className="side_icon"><FontAwesomeIcon icon={faBars} onClick={handleClick}/></div>
        <div className="navbar_logo">
          <img src={WEBLOGO} alt="" />
        </div>
        <div className="nav-menu">
          <ul id="navbar">
            <li>
              <a href="/dhddj/">Home</a>
            </li>

            <li>
              <a href="/ddj/">Eye Glasses Frames<FontAwesomeIcon icon={faCaretDown} /></a>
              <div className="dropdown">
                <ul>
                  <li><a href="/footerpg1/">Men-Eye Glasses Frames</a></li>
                  <li><a href="/footerpg2/">Women-Eye Glasses Frames</a></li>
                  <li><a href="/Kids/">Kids-Eye Glasses Frames</a></li>
                </ul>
              </div>
            </li>

            <li>
              <a href="/jrjr/">Sun Glasses<FontAwesomeIcon icon={faCaretDown} /></a>
              <div className="dropdown">
                <ul>
                  <li><a href="/footerpg1/">Men-Eye Glasses Frames</a></li>
                  <li><a href="/footerpg2/">Women-Eye Glasses Frames</a></li>
                  <li><a href="/Kids/">Kids-Eye Glasses Frames</a></li>
                </ul>
              </div>
            </li>

            <li>
              <NavLink to ="/Contactlens"><a href="/ejdj/">Contact Lenses</a></NavLink>
            </li>

            <li>
              <a href="/dkkddk/">Our Stores</a>
            </li>

            
          </ul>
          <div className="icons">
              <FontAwesomeIcon icon={faSearch} className="icons" />
              <FontAwesomeIcon icon={faHeart} className="icons" />
              <a href="/Login/"><FontAwesomeIcon icon={faUser} className="icons" /></a>
              <NavLink to="/Aboutus"><FontAwesomeIcon icon={faUsers} className="icons"/></NavLink>
              <a href="/Cart/"><FontAwesomeIcon icon={faShoppingCart} className="icons" /></a>
              <div className="nav_cart_count" >
                0
              </div>
          </div>
        </div>
       
      </nav>
      
      
      <Outlet></Outlet>
    </>
  );
};

export default Navbar;