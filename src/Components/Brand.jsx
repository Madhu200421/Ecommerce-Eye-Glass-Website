import React,{ useEffect, useRef, useState } from 'react';
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
import { FaCircleChevronLeft,FaCircleChevronRight } from "react-icons/fa6";
const Brand=()=>{
    const images=[brand1,brand2,brand3,brand10,brand5,brand6,brand7,brand8,brand9];
    const brandRef=useRef();
    const [direction,setDirection]=useState(0);

    const handleLeft=()=>{
      const f=brandRef.current;
      setDirection(-1);
      
      f.style.transform='translate(-11.1%)'
      
    }
    const handleRight=()=>{
      const f=brandRef.current;
      setDirection(1);
      
    }
    const handleTransit=()=>{
      console.log('hii');
      const f=brandRef.current;
      if(direction===-1){
        f.appendChild(f.firstElementChild);
      }else{
        f.prepend(f.lastElementChild);
      }
      
      f.style.transition='none';
    
      setTimeout(() => {
        f.style.transition='all 0.3s linear';
      });
    }
    useEffect(()=>{
      setInterval(() => {
        const f=brandRef.current;
        if(direction===1){
          f.prepend(f.lastElementChild);
          setDirection(-1);
        }else{
          setDirection(-1);
        }
    
      }, 6000);
    })

  return (
    <div className='container-items'>
        <div className="carousel">
          <div className="controls">
            <FaCircleChevronLeft className='arrow next' onClick={handleLeft}/>
            <FaCircleChevronRight className='arrow prev' onClick={handleRight}/>
          </div>
          <div className='contain-brand' ref={brandRef} onTransitionEnd={handleTransit}>
            {images.map((imag,index)=>{
            return <img src={imag} alt={imag} key={index} className='imge'/>
            })}
          </div>
        </div>
    </div>
  )
}

export default Brand;
