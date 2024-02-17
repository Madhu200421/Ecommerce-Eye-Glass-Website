import React from 'react';
import './Aboutus.css';
import abtus1 from './abtus1.png'
import abtus2 from './abtus2.png'
import abtus3 from './abtus3.png'
import abtus4 from './abtus4.png'
import abtus6 from './abtus6.jpg'
import abtus7 from './abtus7.jpg'
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

const Aboutus=()=>{
    return <>
    <div className='abtus'>
       <h1>Welcome to Triveni Eye + – Your Vision, Our Mission!</h1>
       <p>At Triveni Eye +, we believe that clear vision is not just a luxury but an essential part of a fulfilling life. With a legacy of two well-established optical stores in India, we take great pride<br></br>
        in serving our customers with top-quality eyewear, exceptional service, and a wide range of eye care solutions. Our mission is to enhance your vision and overall eye health while<br></br>
        providing an unforgettable shopping experience.</p>
        <img src={abtus1} alt="/"></img>
        <h6><h5>Our Story:</h5>
Founded with a vision to be the beacon of eye care excellence, Triveni Eye + has been<br></br>
 a trusted name in the optical industry for over two decades. Since our inception, we have<br></br>
 been dedicated to providing the finest eyewear products, coupled with cutting-edge<br></br>
 technology and personalized service. With two flagship stores strategically located in<br></br>
 India, we have made it convenient for our customers to access the best in eye care.<br></br>
</h6>

<div className="abtus2">
<img src={abtus2} alt="/"></img>
<h6><h5>Professional Eye Care Services:</h5>Our vision is our top priority, and our team of 
experienced optometrists and eye care specialists is
committed to providing comprehensive eye exams and
 personalized solutions.<br></br></h6>
</div>



<div className='abtus3'>
    <img src={abtus4} alt="/" ></img>
   <h6>
  <h5>Our Commitment to Quality:</h5> 
At Triveni Eye +, quality is not just a buzzword; it’s our way of life. We curate an extensive <br></br>
collection of eyewear from renowned brands and independent designers, ensuring that <br></br>
our customers have access to the latest trends and timeless classics. Whether you need<br></br>
 prescription glasses, sunglasses, contact lenses, or specialized eyewear, we have<br></br>
 something to suit every taste and style.
   </h6>
</div>



<div className='abtus2'>
<img src={abtus6} alt="/"></img>
<h6>Customer-Centric Approach:We understand that each individual is unique, and so are their eye care needs.
At Triveni Eye +, we take the time to listen, understand, and cater to your specific requirements.
</h6>
</div>

<div className='abtus3'>
    <img src={abtus7} alt="/"></img>
    <h6>Experience the Triveni Eye + Difference: the Triveni Eye + difference – a perfect blend of premium eyewear, expert eye care, 
and warm hospitality.<br></br></h6>
   
</div>
    </div>
    <Outlet></Outlet>
 <Footer></Footer>
    </>
}
export default Aboutus;