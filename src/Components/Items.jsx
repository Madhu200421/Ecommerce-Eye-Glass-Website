 import React, { useState } from 'react'
import "./cart.css"
const Items = ({ img,title,Brand,quantity,price,updateTotalAmount}) => {
    const [itemQuantity,setItemQuantity]=useState(quantity);

    const handleIncrement=()=>{
      updateTotalAmount(price);
        setItemQuantity(itemQuantity+1);
        
    };
    const handleDecrement=()=>{
        if (itemQuantity>1){
          updateTotalAmount(-price);
        setItemQuantity(itemQuantity-1);
       
        }
    };
    const totalAmount = price * itemQuantity;
    
  
    
  return (
    <>
    <hr className='hr-line'/>
   <div className='cart-item-container'>
   <div className='item-info'>
    <div className='product-img'>
    <div className='div-x'>x</div>
    <img className='item-img' src={img} alt='image not found'/>
    <p className='itemsc'>{title}</p>
     
      
    </div>
    <div className='title-p'>
      <p> {Brand}</p>
    </div>
       
    <div className='price'>
    <h4 className='priceh4'>{price}</h4>
    </div>
    
    <div className='quantitys'>
    <div className='add-minus-quantity'>
    
    <div className='minus-div' onClick={handleDecrement}>-</div>
       <input type='text' className='txtvalue' value={itemQuantity} placeholder='00'/>
       <div className='add-div' onClick={handleIncrement}>+</div>
    </div>
    </div>
    <div className='total-amount'>
    <p>Rs{totalAmount}</p>
    </div>
    
       
       </div>
        </div>
      
    </>
  )
}

export default Items;