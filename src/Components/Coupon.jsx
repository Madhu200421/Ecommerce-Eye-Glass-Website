import React from 'react';
import './Coupon.css';
import Footer from './Footer';

const Coupon=()=>{
    return (
       <>
       <div className='coupon_container'>
       <form className='coupon'>
        <input type="text" placeholder="Coupon Code" className='couponcode'/>
        <input type="submit" value="Apply Coupon" id="apply-coupon" name="apply" />
       </form>
       </div>

       <div className='footer-con50'>
            <Footer></Footer>
          </div>
       </>
    )
}


export default Coupon;
