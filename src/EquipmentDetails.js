import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useState, useEffect } from "react";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import { DeleteEquipment } from "./DeleteEquipment";
import { API } from "./global.js";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

export function EquipmentDetails({ deletebutton }) {
  const { id } = useParams();
  const [equipment, setEquipment] = useState({});

  useEffect(() => {
    fetch(`${API}/equipments/${id}`, { method: "GET" })
      .then((data) => data.json())
      .then((eq) => setEquipment(eq));
  }, [id]);

  const navigate = useNavigate();
  return (
    <div className="Equipment-details-container">
      <img
        src={equipment.img}
        alt={equipment.name}
        className="equipmentimage"
      />
      <Card className="equipment-individual">
      <CardContent>
        <h2 className="equipmentName">{equipment.name}</h2>
        <p className="equipmentRating"> &#11088;{equipment.rating}</p>
        <h5 className="equipmentbrand">{equipment.brandname}</h5>
        <p className="equipmentsummary">{equipment.summary}</p>
        <p className="equipmentRate">
          <i>Rent:</i>
          {equipment.rent_per_month} per month
        </p>
       
        
        <div className="buttons">
          <div className="edit-delete">
            <IconButton
              color="success"
              onClick={() => navigate(`/equipments/edit/${id}/edit`)}
              aria-label="Equipment-edit"
            >
              <EditIcon />
              Click to edit product details
            </IconButton>
          </div>
          <div>
            <DeleteEquipment />
          </div>
        </div>
        <Button
          onClick={() => navigate(-1)}
          variant="contained"
          startIcon={<ArrowBackIosIcon />}
        >
          Back
        </Button>
        </CardContent>
        </Card>
      </div>
        
  );
}
