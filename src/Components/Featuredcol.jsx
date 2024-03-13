import React from 'react';
import './Featuredcol.css';
import FC1 from '../Components/FC1.jpg';
import FC2 from '../Components/FC2.jpg';
import FC3 from '../Components/FC3.jpg';
import FC4 from '../Components/FC4.jpg';
import FC5 from '../Components/FC5.jpg';
import FC6 from '../Components/FC6.jpg';
import FC7 from '../Components/FC7.jpg';
import FC8 from '../Components/FC8.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faMagnifyingGlass, faHeart, faUser, faUsers, faCartShopping, faLink } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
const Featuredcol=()=>{
    return <>
    <div>
       <h1>Featured Collection</h1>
       <div className='caard'>
  <div>
  <button type="button" >Sale!</button>
    <NavLink to="ProductSlider"><img src={FC1} alt="/"/></NavLink>
  <p>SC 876 C407 Scott</p>
  <h6 className='header'> &#x20B9;2,352.00</h6>
  <h5 className='org'>&#x20B9;2,117.00</h5>
  <FontAwesomeIcon icon={faCartShopping} className="icon"/>
<NavLink to="/ProductSlider"><p className='header'>Select Options</p></NavLink>
  </div>
        
     <div>  
     <button type="button" >Sale!</button>
       <NavLink to="ProductSlider"><img src={FC2} alt="/"/></NavLink> 
        <p>SC5357 C1 Scott</p>
        <h6 className='header'> &#x20B9;3,010.00</h6>
        <h5 className='org'>&#x20B9;2,709.00</h5>
        <FontAwesomeIcon icon={faCartShopping} className="icon"/>
        <NavLink to="/ProductSlider"><p className='header'>Select Options</p></NavLink>
        </div>
      
      <div>
      <button type="button" >Sale!</button>
      <NavLink to="ProductSlider"><img src={FC3} alt="/"/></NavLink>
      <p>SC5357 C2 Scott</p>
    <h6 className='header'> &#x20B9;3,010.00</h6>
    <h5 className='org'>&#x20B9;2,709.00</h5>
    <FontAwesomeIcon icon={faCartShopping} className="icon"/>
    <NavLink to="/ProductSlider"><p className='header'>Select Options</p></NavLink>
      </div>
       

       <div>
       <button type="button" >Sale!</button>
      <NavLink to="ProductSlider"> <img src={FC4} alt="/"/></NavLink>
       <p>SC5386 C2 Scott</p>
    <h6 className='header'> &#x20B9;2,509.00</h6>
    <h5 className='org'>&#x20B9;2,258.00</h5>
    <FontAwesomeIcon icon={faCartShopping} className="icon"/>
    <NavLink to="/ProductSlider"><p className='header'>Select Options</p></NavLink>
       </div>
      

<div>
<button type="button" >Sale!</button>
    <NavLink to="Productsrem"><img src={FC5} alt="/"/></NavLink>
    <p>S1183 C3 IRUS</p>
    <h6 className='header'> &#x20B9;1,990.00</h6>
    <h5 className='org'>&#x20B9;1,791.00</h5>
    <FontAwesomeIcon icon={faCartShopping} className="icon"/>
   <NavLink to="/Productsrem"><p className='header'>Select Options</p></NavLink>
</div>
      
      <div>
      <button type="button" >Sale!</button>
       <NavLink to="Productsrem"><img src={FC6} alt="/"/></NavLink> 
        <p>S1183 C4 IRUS</p>
    <h6 className='header'> &#x20B9;1,990.00</h6>
    <h5 className='org'>&#x20B9;1,791.00</h5>
    <FontAwesomeIcon icon={faCartShopping} className="icon"/>
    <NavLink to="/Productsrem"><p className='header'>Select Options</p></NavLink>
      </div>
        

        <div>
        <button type="button" >Sale!</button>
            <NavLink to="Productsrem"><img src={FC7} alt="/"/></NavLink>
            <p>S1183 C5 IRUS</p>
    <h6 className='header'> &#x20B9;1,990.00</h6>
    <h5 className='org'>&#x20B9;1,791.00</h5>
    <FontAwesomeIcon icon={faCartShopping} className="icon"/>
    <NavLink to="/Productsrem"><p className='header'>Select Options</p></NavLink>
        </div>


        <div>
        <button type="button" >Sale!</button>
            <NavLink to="Productsrem"><img src={FC8} alt="/"/></NavLink>
            <p>SC 2224 C1 Scott</p>
    <h6 className='header'> &#x20B9;2,490.00</h6>
    <h5 className='org'>&#x20B9;2,241.00</h5>
    <FontAwesomeIcon icon={faCartShopping} className="icon"/>
    <NavLink to="/Productsrem"><p className='header'>Select Options</p></NavLink>
        </div>
   
   
        
      
      
       </div>
    </div>
    <div className='shop_now'>
    <NavLink to="/Pro"><button type="button" >Shop Now</button></NavLink>
    </div>


    
    </>
}

export default Featuredcol;
