import React from 'react';
import "../App.css";
import DetailsThumb from './DetailsThumb';

import FC5 from "./FC5.jpg";
import FC6 from "./FC6.jpg";
import FC7 from "./FC7.jpg";
import FC8 from "./FC8.jpg";

import { NavLink } from 'react-router-dom';
import './Productsrem.css';
import Footer from './Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faMagnifyingGlass, faHeart, faUser, faUsers, faCartShopping, faLink } from '@fortawesome/free-solid-svg-icons';

class Productsrem extends React.Component{
  state={
    products:[
      {
        "src":[FC5,FC6,FC7,FC8],
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
            <input type="button" className='bas' value="Add to Basket"/><br></br><br></br>
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
              <td>IRUS BY IDEE EYEWEAR</td>
            </tr>
            <tr>
              <td>Color</td>
              <td>Black</td>
            </tr>
            <tr>
              <td>Shape</td>
              <td>Square</td>
            </tr>
            <tr>
              <td>Size</td>
              <td>54-16-138</td>
            </tr>
            <tr>
              <td>Style</td>
              <td>Full rim</td>
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
    <img src={FC5} alt="/"/>
    <p>S1183 C3 IRUS</p>
    <h6 className='header'> &#x20B9;1,990.00</h6>
    <h5 className='org'>&#x20B9;1,791.00</h5>
    <FontAwesomeIcon icon={faCartShopping} className="icon"/>
    <NavLink to="/ProductSlider"><p className='header'>Select Options</p></NavLink>
</div>
  
<div>
<button type="button" >Sale!</button>
    <img src={FC6} alt="/"/>
    <p>S1183 C3 IRUS</p>
    <h6 className='header'> &#x20B9;1,990.00</h6>
    <h5 className='org'>&#x20B9;1,791.00</h5>
    <FontAwesomeIcon icon={faCartShopping} className="icon"/>
    <NavLink to="/ProductSlider"><p className='header'>Select Options</p></NavLink>
</div>
<div>
<button type="button" >Sale!</button>
    <img src={FC7} alt="/"/>
    <p>S1183 C3 IRUS</p>
    <h6 className='header'> &#x20B9;1,990.00</h6>
    <h5 className='org'>&#x20B9;1,791.00</h5>
    <FontAwesomeIcon icon={faCartShopping} className="icon"/>
    <NavLink to="/ProductSlider"><p className='header'>Select Options</p></NavLink>
</div>
<div>
<button type="button" >Sale!</button>
    <img src={FC8 } alt="/"/>
    <p>S1183 C3 IRUS</p>
    <h6 className='header'> &#x20B9;1,990.00</h6>
    <h5 className='org'>&#x20B9;1,791.00</h5>
    <FontAwesomeIcon icon={faCartShopping} className="icon"/>
   <NavLink to="/ProductSlider"><p className='header'>Select Options</p></NavLink>
</div>


 
      
  
      </div>
      </div>
      <div className='footer_con'>
            <Footer/>
          </div>
                 
      </div>
           
      
    )
      }
}
export default Productsrem;