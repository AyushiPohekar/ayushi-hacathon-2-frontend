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
import Items from "./items";

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
      <div className="card-total">
        <h3>Cart total:<span>34000rs</span></h3>
        <button>Checkout</button>
      </div>
      <div className="cart-items">
        <div className="cart-items-container">
          <Items/>
        </div>
      </div>
      
    </section>
    </>
    
  )
}
export default Cart;