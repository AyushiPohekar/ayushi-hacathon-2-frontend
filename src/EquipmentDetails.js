import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useState, useEffect } from "react";
import { API } from "./global";


export function EquipmentDetails() {
  const { id } = useParams();
  const [equipment, setEquipment] = useState({});
  useEffect(() => {
    fetch(`${API}/equipments/${id}`, { method: "GET" })
      .then((data) => data.json())
      .then((eq) => setEquipment(eq));
  }, [id]);
  return (
    <div className="Equipment-details-container">
       <img
        src={equipment.img}
        alt={equipment.name}
        className="equipmentimage" />
     <div className="movie-individual">
     <h2 className="equipmentName">{equipment.name}</h2>
     <p className="equipmentRating" > &#11088;{equipment.rating}</p>
     <h5 className="equipmentbrand">{equipment.brandname}</h5>
     <p className="equipmentsummary">{equipment.summary}</p>
     <p className="equipmentRate"><i>Rent:</i>{equipment.rent_per_month} per month</p>

     </div>
    </div>
  
  
  
  
    );
}
