import React from "react";
import "./cart.css"
import { useState, useEffect } from "react";
function Cart({cart, setCart, handleChange }){
    const [rent_per_month, setrent_per_month] = useState(0);
    const handleRemove = (id) => {
        const arr = cart.filter((equipment) => equipment.id !== id);
        setCart(arr);
        handlerent_per_month();
      };
      const handlerent_per_month = () => {
        let ans = 0;
        cart.map((equipment) => (ans += equipment.amount * equipment.rent_per_month));
        setrent_per_month(ans);
      };
      useEffect(() => {
        handlerent_per_month();
      });

    return (
        <article>
          {cart.map((equipment) => (
            <div className="cart_box" key={equipment.id}>
              <div className="cart_img">
                <img src={equipment.img} alt="" />
                <p>{equipment.name}</p>
              </div>
              <div>
                <button onClick={() => handleChange(equipment, 1)}>+</button>
                <button>{equipment.amount}</button>
                <button onClick={() => handleChange(equipment, -1)}>-</button>
              </div>
              <div>
                <span>{equipment.rent_per_month}</span>
                <button onClick={() => handleRemove(equipment.id)}>Remove</button>
              </div>
            </div>
          ))}
          <div className="total">
            <span>Total rent_per_month of your Cart</span>
            <span>Rs - {rent_per_month}</span>
          </div>
        </article>
      );
    };
    
    export default Cart;
  
