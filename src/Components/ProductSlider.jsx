import React, { useState } from 'react';
// import "../../App.css";
import DetailsThumb from './DetailsThumb';
import FC1 from '../Components/FC1.jpg';
import FC2 from '../Components/FC2.jpg';
import FC3 from '../Components/FC3.jpg';
import FC4 from '../Components/FC4.jpg';
import './ProductSlider.css';
import { NavLink } from 'react-router-dom';
import Footer from './Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faMagnifyingGlass, faHeart, faUser, faUsers, faCartShopping, faLink } from '@fortawesome/free-solid-svg-icons';

class productSlider extends React.Component{
  
  state={
    products:[
      {
        "src":[FC1,FC2,FC3,FC4],
        "name":"SC 876 C407 Scott",
        "price": 2352.00
      }
    ],index:0,quantity:1,cartItem:[]
  };
  myRef=React.createRef();

  

  handleTab=index=>{
    this.setState({
      index:index
    })
    const images=this.myRef.current.children;
    for(let i=0;i<images.length;i++){
      images[i].className=images[i].className.replace("active","");
    }
    images[index].className="active";
  };
  componentDidMount(){
    const {index}=this.state;
    this.myRef.current.children[index].className="active";
  }
  handleIncrement = () => {
    this.setState(prevState => ({
      quantity: prevState.quantity + 1,
    }));
  };
  handleDecrement = () => {
    this.setState(prevState => ({
      quantity: prevState.quantity > 1 ? prevState.quantity - 1 : 1,
    }));
 
  };
  handleAddToCart=()=>{
    const {products,index,quantity,cartItems}=this.state;
    const selectedProduct=products[index];

    const newItem={
      id:cartItems.length +1,
      name:selectedProduct.name,
      price:selectedProduct.price,
      quantity:quantity
    }
    this.setState(prevState=>({
      cartItems:[...prevState.cartItem,newItem],
      quantity:1
    }));
  };
  render(){
    const {products,cartItem, index,quantity}=this.state;
    return(
      <div className='app' >
      {
        products.map(item=>(
          <div className='details' key={item._id}>
            <div className='box' >
            <div className='row'>
            <DetailsThumb images={item.src} tab={this.handleTab} myRef={this.myRef}/>
            </div>
             </div>            
            <div className='big-img' style={{ marginTop: '-25px', }}>
            <img src={item.src[index]} alt=''></img>
            </div>
            <div className='setopt'>
            <p>SC 876 C407 Scott</p>
            <h6 className='pri' style={{ display: 'inline-block' }}>&#x20B9;2,352.00</h6>
            <h6 className='org9' style={{ display: 'inline', marginLeft: '5px' }}>&#x20B9;2,117.00</h6>
            </div>     
            <div className='option'>
            <label htmlFor="brand">Brand</label><br></br>
            <select id="brandBy">
    <option value="price">Choose an option</option>
    <option value="name">Scott Eyewear</option>
            </select><br></br>
            <label htmlFor="color">Color</label><br></br>
            <select id="colorBy">
    <option value="price">Choose an option</option>
    <option value="name">Black</option>
            </select><br></br>         
            <label htmlFor="shape">Shape</label><br></br>
            <select id="shapeBy">
    <option value="price">Choose an option</option>
    <option value="name">Rectangle</option>
            </select><br></br>
            <label htmlFor="shape">Size</label><br></br>
            <select id="shapeBy">
    <option value="price">Choose an option</option>
    <option value="name">55-17-145</option>
            </select><br></br>
           <label htmlFor="shape">Style</label><br></br>
            <select id="shapeBy">
    <option value="price">Choose an option</option>
    <option value="name">Full frame Acetate</option>
            </select><br></br><br></br>
            <div>
              <button className='qtybtn' onClick={this.handleDecrement}>-</button>
              <input type='text' value={quantity}  className='txtqty'/>            
              <button className='qtybtn' onClick={this.handleIncrement} >+</button>
            </div>
            <button onClick={this.handleAddToCart} className='bas'>Add To Basket</button>
            {/* <input type="button" className='bas' onClick={this.handleAddToCart} value="Add to Basket"/><br></br><br></br> */}
            <FontAwesomeIcon icon={faHeart}  className='heart'/><button className='wish' disabled>Add to wishlist</button>
            <p>SKU: N/A<br></br>
           Categories: Men - Eye Glasses Frames, Women-Eye Glasses Frames</p>
          </div>
          <h2 className='add'>Additional Information</h2>
          <h5 className='rev'>Reviews(0)</h5><br></br>
          <div className='tbcon'>
          <table border='1' className='infotb'>
            <tr>
              <td>Brand</td>
              <td>Scott Eyewear</td>
            </tr>
            <tr>
              <td>Color</td>
              <td>Black</td>
            </tr>
            <tr>
              <td>Shape</td>
              <td>Rectangle</td>
            </tr>
            <tr>
              <td>Size</td>
              <td>55-17-145</td>
            </tr>
            <tr>
              <td>Style</td>
              <td>Full frame acetate</td>
            </tr>
          </table>
          </div>
          </div>                
        ))
      }
      <div>
        <hr></hr>
        <h2 className='rel'>Related Products</h2>
        <div className='caard'>
  <div>
  <button type="button" >Sale!</button>
   <NavLink to="/Frontframe"><img src={FC1} alt="/"/></NavLink> 
  <p>SC 876 C407 Scott</p>
  <h6 className='header'> &#x20B9;2,352.00</h6>
  <h5 className='org'>&#x20B9;2,117.00</h5>
  <FontAwesomeIcon icon={faCartShopping} className="icon"/>
  <NavLink to="/Productsrem"><p className='header'>Select Options</p></NavLink>
  </div>
  <div>  
     <button type="button" >Sale!</button>
       <NavLink to="/C1scott"><img src={FC2} alt="/"/></NavLink> 
        <p>SC5357 C1 Scott</p>
        <h6 className='header'> &#x20B9;3,010.00</h6>
        <h5 className='org'>&#x20B9;2,709.00</h5>
        <FontAwesomeIcon icon={faCartShopping} className="icon"/>
        <NavLink to="/Productsrem"><p className='header'>Select Options</p></NavLink>
        </div>
  <div>
      <button type="button" >Sale!</button>
      <NavLink to="/C2scott"><img src={FC3} alt="/"/></NavLink>
      <p>SC5357 C2 Scott</p>
    <h6 className='header'> &#x20B9;3,010.00</h6>
    <h5 className='org'>&#x20B9;2,709.00</h5>
    <FontAwesomeIcon icon={faCartShopping} className="icon"/>
    <NavLink to="/Productsrem"><p className='header'>Select Options</p></NavLink>
      </div>
      <div>
       <button type="button" >Sale!</button>
       <NavLink to="/C22scott"><img src={FC4} alt="/"/></NavLink>
       <p>SC5386 C2 Scott</p>
    <h6 className='header'> &#x20B9;2,509.00</h6>
    <h5 className='org'>&#x20B9;2,258.00</h5>
    <FontAwesomeIcon icon={faCartShopping} className="icon"/>
    <NavLink to="/Productsrem"><p className='header'>Select Options</p></NavLink>
       </div> 
      </div>
      </div>
       <div className='footer_con100'>
            <Footer></Footer>
          </div> 
                 
      </div> 
    )
    }
}
export default productSlider;
