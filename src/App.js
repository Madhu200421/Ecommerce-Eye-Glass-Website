import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Outlet, Link } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';

import Product from './Components/Product';
import Img from './Components/Slider';
import Login from './Components/Pages/Login';
import Slider from './Components/Slider';
import { Carousel, Pagination } from 'react-bootstrap';


import Aboutus from './Components/Aboutus';
import Header from './Components/Header ';
import Section from './Components/Section';
import Featuredcol from './Components/Featuredcol';
import Pro from './Components/Pro';
import RegisterFrom from './Components/RegisterFrom';
import Footer from './Components/Footer';
import Footerpg1 from './Components/Footerpg1';
import Footerpg2 from './Components/Footerpg2';
import Brand from './Components/Brand';
import Kids from './Components/KIds';
import Contactlens from './Components/Contactlens';
import Storelocator from './Components/Storelocator';
import Privacypolicy from './Components/Privacypolicy';
import Contactus from './Components/Contactus';
import ProductSlider from './Components/ProductSlider';
import DetailsThumb from './Components/DetailsThumb';
import Selectoptioncon from './Components/Selectoptioncon';
import Productsrem from './Components/Productsrem';
import Paymentform from './Components/Paymentform';
import Refund from './Components/Refund';
import Basket from './Components/Basket';
import Cart from './Components/Cart';
import Coupon from './Components/Coupon';
import Form from './Components/Pages/Form';















var Demo=()=>{
  return <>
  
   <Img></Img>
   <Header></Header>
      <Product></Product>
      <Section></Section>
      <Featuredcol></Featuredcol>
      <Brand></Brand>
<Footer></Footer>


  </>
}

 
function App(){
  return(
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Navbar></Navbar>}>
      <Route index element={<Demo></Demo>}></Route>
   <Route path="Login" element={<Login></Login>}/>
   <Route path="RegisterFrom" element={<RegisterFrom></RegisterFrom>}/>

   <Route path="Aboutus" element={<Aboutus></Aboutus>}/>
   <Route path="Pro" element={<Pro></Pro>}/>
   <Route path="Footerpg1" element={<Footerpg1></Footerpg1>}/>
<Route path="Footerpg2" element={<Footerpg2></Footerpg2>}/>
<Route path="Kids" element={<Kids></Kids>}/>
<Route path="Contactlens" element={<Contactlens></Contactlens>}/>
<Route path="Privacypolicy" element={<Privacypolicy></Privacypolicy>}/>
<Route path="Contactus" element={<Contactus></Contactus>}/>
<Route path="ProductSlider" element={<ProductSlider></ProductSlider>}/>
<Route path="Productsrem" element={<Productsrem></Productsrem>}/>
<Route path="Storelocator" element={<Storelocator></Storelocator>}/>
<Route path="Refund" element={<Refund></Refund>}/>

<Route path="Cart" element={<Cart></Cart>}/>
<Route path="/Basket" element={<Basket></Basket>}/>
<Route path="/Paymentform" element={<Paymentform></Paymentform>}/>
<Route path="/Form" element={<Form></Form>}/>
<Route path="/Coupon" element={<Coupon></Coupon>}/>
   </Route>
</Routes>
</BrowserRouter>

</>
  )
}



 
export default App;