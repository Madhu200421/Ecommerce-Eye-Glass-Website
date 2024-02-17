import React from 'react';
import './Contactlens.css';
import './Kids.css';
import Footer from './Footer';
const Contactlens=()=>{
    return (
        <>
         <h5 className='res'>Contact Lens- parent category</h5>
      <div className='long'>
        <h5 className='msg'>No products were found matching your selection</h5>
      </div>

   <div className='select_bar'>
   <label for="price">Filter by Price:</label><br></br>
   <input type="range" id="price" name="price" /><br></br>
   <input type="text" id="num" placeholder="1,982" />
<input type="text" id="num2" placeholder="3,690" /><br></br><br></br>


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
</div><br></br><br></br>

<div>
  <label htmlFor="shape">Shape:</label><br></br>
  <select id="shapeBy">
    <option value="price">avaitor(0)</option>
    <option value="name">NAVIGATOR(0)</option>
    <option value="name">rectangle(0)</option>
    <option value="name">SQUARE(0)</option>
    <option value="name">Wayfarer(0)</option>
  </select>
</div><br></br><br></br>

<div>
  <label htmlFor="style">Style:</label><br></br>
  <select id="styleBy">
    <option value="price">Full frame Acetate(0)</option>
    <option value="name">Full rim(0)</option>
    <option value="name">Half rim(1)</option>
    <option value="name">Supra(0)</option>
  </select>
</div><br></br><br></br>

<div>
  <label htmlFor="Brands">Brands:</label><br></br>
  <select id="brandsBy">
    <option value="price">IRUD BY IDEE EYEWEAR(0)</option>
    <option value="name">Scott Eyewear(1)</option>
  </select>
</div>
   </div>
      
      <div className='footer_con2'>
  <Footer/>
</div>
        </>
    )
}

export default Contactlens;