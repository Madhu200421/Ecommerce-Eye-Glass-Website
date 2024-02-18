import React from 'react';
import './Brand.css';
import brand1 from './brand1.jpeg'
import brand2 from './brand2.jpeg'
import brand3 from './brand3.png'
import brand5 from './brand5.png'
import brand6 from './brand6.jpg'
import brand7 from './brand7.png'
import brand8 from './brand8.jpg'
import brand9 from './brand9.jpg'
import brand10 from './brand10.jpeg'
import brand11 from './brand11.jpg'
const Brand=()=>{
    return (
        <>
         <h2 className='text'>Our Brands</h2>
         <div className='container'>
            
            <div className='slidee'> 
            <img src={brand1} alt="/" className='brands'></img>
            </div>
           <div className='slidee'>
           <img src={brand2} alt="/" className='brands'></img>                                                                                                                                                                                                                 
           </div>
           <div className='slidee'>
           <img src={brand3} alt="/" className='brands'></img>                                                                                                                                                                                                                 
           </div>
          
           



           

         </div>
        </>
    )
}

export default Brand;
