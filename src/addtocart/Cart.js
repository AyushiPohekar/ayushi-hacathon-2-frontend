import React from "react";
import "./Cart.css";
import Button from "@mui/material/Button";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';

function Cart(){
    const navigate = useNavigate(); 
  return(
    <>
    <header>
    <div className="continue-shopping">
    <IconButton color="primary" onClick={()=>navigate(-1)} aria-label="back">
    <ArrowBackIosIcon />
    </IconButton>
   
        <h1>Continue shopping</h1>
       
     </div>
     {/* <div className="cart-icon">
     <IconButton color="primary"  aria-label="back">
    < AddShoppingCartIcon/>
    </IconButton>
     </div> */}
     
    </header>
    <section className="main-cart-section">
      <h1>Renting-cart</h1>
      <p className="total items">You have <span className="total-items-count">7</span> in Cart</p>
      <div className="cart-items">
        <div className="cart-items-container">
          <div className="items-info">
            <div className="product-img">
              <img src="https://m.media-amazon.com/images/I/71pbiTKTCnL._SX355_.jpg" alt="image"></img>
            </div>
            <div className="title">
              <h3>Nikon Camera</h3>
              <p>Camera</p>
            </div>
            <div className="add-minus-quantity">
            <IconButton color="primary" className="minus" aria-label="plus">
               <AddIcon/>
            </IconButton>
            <input type="text" placeholder="1"/>
            <IconButton color="primary" className="plus" aria-label="plus">
               <RemoveIcon/>
            </IconButton>
           
            
            </div>
            <div className="price">
              <h3>200rs</h3>
            </div>
            
            <div className="remove-item">
            <IconButton color="error" >
     <DeleteIcon  />
    </IconButton>
            </div>



          </div>
        </div>
      </div>
    </section>
    </>
    
  )
}
export default Cart;