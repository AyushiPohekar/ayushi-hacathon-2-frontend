import React from "react";
import "./Cart.css";
import Button from "@mui/material/Button";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import Items from "./items";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';

function Cart(){
    const navigate = useNavigate(); 
    const { id } = useParams();
    const [product, setProduct] = useState({});
    useEffect(() => {
      fetch(`https://62a970daec36bf40bdb78cff.mockapi.io/equipments/cart/${id}`, { method: "GET" })
        .then((data) => data.json())
        .then((pr) => setProduct(pr));
    }, [id]);
  return(
    <>
    <header>
    <div className="continue-shopping">
    <IconButton color="primary" onClick={()=>navigate(-1)} aria-label="back">
    <ArrowBackIosIcon />
    </IconButton>
   
        <h1>Continue shopping</h1>
       
     </div>
    
     
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
        <div className="items-info">
            <div className="product-img">
              <img src={product.img} alt={product.name}></img>
            </div>
            <div className="title">
              <h3>{product.name}</h3>
              <p>{product.brandname}</p>
            </div>
            <div className="add-minus-quantity">
            <IconButton color="primary" className="minus" aria-label="plus">
               <AddIcon/>
            </IconButton>
            <input type="text" placeholder="1"/>
            <IconButton color="primary" className="plus" aria-label="plus">
               <RemoveIcon/>
            </IconButton>
            <div className="calender">
            <input type="date" />
            </div>
            
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