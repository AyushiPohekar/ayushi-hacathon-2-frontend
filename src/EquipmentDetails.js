import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useState, useEffect } from "react";




export function EquipmentDetails() {

  const { id } = useParams();
  const [equipment, setEquipment] = useState({});

  useEffect(() => {
    fetch(`https://62a970daec36bf40bdb78cff.mockapi.io/equipments/${id}`, { method: "GET" })
      .then((data) => data.json())
      .then((eq) => setEquipment(eq));
  }, [id]);
  const navigate = useNavigate(); 
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
     <Button
          onClick={() => navigate(-1)}
          variant="outlined"
          startIcon={<ArrowBackIosIcon />}
        >
          Back
        </Button>

     </div>
    </div>
  
  
  
  
    );
}
