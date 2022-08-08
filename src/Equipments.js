import * as React from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export function Equipments({ equipment, id,handleClick}) {
  const navigate = useNavigate();
  return (
    <div className="equipment-container">
      <img
        src={equipment.img}
        alt={equipment.name}
        className="equipment-picture"
      />
      <h2 className="equipment-name">{equipment.name}</h2>

      <div className="detail-button">
        <Button
          variant="contained"
          onClick={() => navigate(`/equipments/${id}`)}
        >
          View Details
        </Button>
        <Button variant="contained" color="success" onClick={()=>handleClick(equipment)}>Add to Cart</Button>
        {/* <Button variant="contained" color="success" onClick={()=>navigate('/equipments/cart')}>Add to Cart</Button> */}
      </div>
    </div>
  );
}
