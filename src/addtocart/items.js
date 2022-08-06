import React from 'react';
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';


const Items=()=>{
    return(
        <>
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

        </>
    )
}
export default Items;