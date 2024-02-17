import React, { useState } from 'react'
import "./cart.css";
// import img from "./FC5.jpg"
import Items from './Items';
import { productlast } from './productlast';
import "./cart.css"
import Basket from './Basket';
import Footer from './Footer'; 
const Cart=()=> {

  const [item,setItem]=useState(productlast);
  const [totalAmounts,setTotalAmounts]=useState(0);
  const updateTotalAmount=(price)=>{
    setTotalAmounts(totalAmounts+price);
  }
  return (
    <>
   
    <div className='cart-item'>
   <div className='cart-title-h4'>
   <h4 className='product'>product</h4>
   <h4 className='price'> price</h4>
   <h4 className='quantity'>Quantity</h4>
   <h4 className='subtotal'>Subtotal</h4>
  
   </div>
   {
    item.map((curItem)=>{
      return <Items key={curItem.id} {...curItem} updateTotalAmount={updateTotalAmount}/>
    })
   }
   
   </div>
   <div className='Bsket-design'><Basket totalAmounts={totalAmounts} /></div>
    
    <div className='footer-con80'>
      <Footer></Footer>
    </div>
    </>
  )
}

export default Cart;