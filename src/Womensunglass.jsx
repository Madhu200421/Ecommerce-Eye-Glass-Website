import React from 'react';
import './Womensunglass.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faMagnifyingGlass, faHeart, faUser, faUsers, faCartShopping, faLink } from '@fortawesome/free-solid-svg-icons';
import FC1 from '../Components/FC1.jpg';
import FC2 from '../Components/FC2.jpg';
import FC3 from '../Components/FC3.jpg';
import FC4 from '../Components/FC4.jpg';
import FC5 from '../Components/FC5.jpg';
import FC6 from '../Components/FC6.jpg';
import FC7 from '../Components/FC7.jpg';
import FC8 from '../Components/FC8.jpg';
import FC9 from '../Components/FC9.jpg';
import FC10 from '../Components/FC10.jpg';
import FC11 from '../Components/FC11.jpg';
import FC12 from '../Components/FC12.jpg';
import FC13 from '../Components/FC13.jpg';
import Footer from './Footer';

const Womensunglass=()=>{
    return (
        <>
<h5 className='res'>Eye Glasses Frames-Women Sub Category</h5>
<h5 className='res'>Showing 1-6 results </h5>
    <div className='caard'>
  <div>
  <button type="button" >Sale!</button>
    <img src={FC13} alt="/"/>
  <p>SC 876 C407 Scott</p>
  <h6 className='header'> &#x20B9;2,352.00</h6>
  <h5 className='org'>&#x20B9;2,117.00</h5>
  <FontAwesomeIcon icon={faCartShopping} className="icon"/>
<p className='header'>Select Options</p>
  </div>


  <div>  
     <button type="button" >Sale!</button>
        <img src={FC11} alt="/"/>
        <p>SC5357 C1 Scott</p>
        <h6 className='header'> &#x20B9;3,010.00</h6>
        <h5 className='org'>&#x20B9;2,709.00</h5>
        <FontAwesomeIcon icon={faCartShopping} className="icon"/>
        <p className='header'>Select Options</p>
        </div>

        <div>
      <button type="button" >Sale!</button>
      <img src={FC8} alt="/"/>
      <p>SC5357 C2 Scott</p>
    <h6 className='header'> &#x20B9;3,010.00</h6>
    <h5 className='org'>&#x20B9;2,709.00</h5>
    <FontAwesomeIcon icon={faCartShopping} className="icon"/>
    <p className='header'>Select Options</p>
      </div>
   </div>
   

   <div className='caard'>
   <div>
       <button type="button" >Sale!</button>
       <img src={FC7} alt="/"/>
       <p>SC5386 C2 Scott</p>
    <h6 className='header'> &#x20B9;2,509.00</h6>
    <h5 className='org'>&#x20B9;2,258.00</h5>
    <FontAwesomeIcon icon={faCartShopping} className="icon"/>
   <p className='header'>Select Options</p>
       </div>


       <div>
<button type="button" >Sale!</button>
    <img src={FC6} alt="/"/>
    <p>S1183 C3 IRUS</p>
    <h6 className='header'> &#x20B9;1,990.00</h6>
    <h5 className='org'>&#x20B9;1,791.00</h5>
    <FontAwesomeIcon icon={faCartShopping} className="icon"/>
    <p className='header'>Select Options</p>
</div>


<div>
      <button type="button" >Sale!</button>
        <img src={FC5} alt="/"/>
        <p>S1183 C4 IRUS</p>
    <h6 className='header'> &#x20B9;1,990.00</h6>
    <h5 className='org'>&#x20B9;1,791.00</h5>
    <FontAwesomeIcon icon={faCartShopping} className="icon"/>
    <p className='header'>Select Options</p>
      </div>
       </div>


       <div className='caard'>
        
        
        <div>
       
        </div>

        <div>
        
        </div>
        </div>



        <div className='caard'>
            <div>
           
            </div>


           

            
        </div>

        <div className='caard'>
            
        </div>

        <div className='selectbarrr'>
  <label htmlFor="def">Default Sorting:</label>
  <select id="defBy">
    <option value="price">Default sorting</option>
    <option value="name">Sort by popularity</option>
    <option value="name">Sort by average rating</option>
    <option value="name">Sort by latest</option>
    <option value="name">Sort by price:Low to high</option>
    <option value="name">Sort by price:High to  low</option>
  </select><br></br><br></br><br></br><br></br><br></br><br></br>
  
<div>
<label for="price">Filter by Price:</label><br></br>
<input type="range" id="price" name="price" /><br></br>
<input type="text" id="num" placeholder="1,982" />
<input type="text" id="num2" placeholder="3,690" />
  </div><br></br><br></br><br></br><br></br><br></br><br></br>

  <div>
  <label htmlFor="colour">Colour:</label><br></br>
  <select id="colourBy">
    <option value="price">Black(0)</option>
    <option value="name">Black & gold(0)</option>
    <option value="name">Blue(0)</option>
    <option value="name">Gold(0)</option>
    <option value="name">Gun mental(0)</option>
    <option value="name">Olive Green(0)</option>
    <option value="name">Silver & Blue(0)</option>
    <option value="name">Smoke Yellow(0)</option>
  </select>
</div><br></br><br></br><br></br><br></br><br></br><br></br>

<div>
  <label htmlFor="shape">Shape:</label><br></br>
  <select id="shapeBy">
    <option value="price">avaitor(0)</option>
    <option value="name">NAVIGATOR(0)</option>
    <option value="name">rectangle(0)</option>
    <option value="name">SQUARE(0)</option>
    <option value="name">Wayfarer(0)</option>
  </select>
</div><br></br><br></br><br></br><br></br><br></br><br></br>

<div>
  <label htmlFor="style">Style:</label><br></br>
  <select id="styleBy">
    <option value="price">Full frame Acetate(0)</option>
    <option value="name">Full rim(0)</option>
    <option value="name">Half rim(1)</option>
    <option value="name">Supra(0)</option>
  </select>
</div><br></br><br></br><br></br><br></br><br></br><br></br>

<div>
  <label htmlFor="Brands">Brands:</label><br></br>
  <select id="brandsBy">
    <option value="price">IRUD BY IDEE EYEWEAR(0)</option>
    <option value="name">Scott Eyewear(1)</option>
  </select>
</div><br></br><br></br><br></br><br></br>

  </div>
<div className='footer-con20'>
<Footer></Footer>
</div>
        </>
    )
}


export  default Womensunglass;