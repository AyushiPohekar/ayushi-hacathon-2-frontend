import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { API } from "./global.js";

function Editequipment() {
  const { id } = useParams();
  // const equipment = equipmentList[id];
  const [equipment, setequipment] = useState(null);

  const getequipment = () => {
    fetch(`${API}/equipments/${id}`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((eq) => setequipment(eq));
  };
  useEffect(() => getequipment(), []);
  return equipment ? <EditequipmentForm equipment={equipment} /> : "Loading...";
}

function EditequipmentForm({ equipment }) {
  const [name, setName] = useState(equipment.name);
  const [brandname, setbrandname] = useState(equipment.name);
  const [rating, setRating] = useState(equipment.rating);
  const [img, setimg] = useState(equipment.img);
  const [summary, setSummary] = useState(equipment.summary);
  const [rent_per_month, setrent_per_month] = useState(
    equipment.rent_per_month
  );

  const navigate = useNavigate();
  const editequipment = () => {
    const updatedequipment = {
      name: name,
      brandname: brandname,
      img: img,
      rating: rating,
      summary: summary,
      rent_per_month: rent_per_month,
    };

    // setequipmentList([...equipmentList, newequipment]);

    //POST
    //1.METHOD-POST
    //2.

    fetch(`${API}/equipments/${equipment.id}/edit`, {
      method: "PUT",
      body: JSON.stringify(updatedequipment),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => navigate("/equipments"));
  };

  return (
    <div className="add-equipment-form">
      <TextField
        value={name}
        label="Name"
        variant="outlined"
        onChange={(event) => setName(event.target.value)}
      />
      <TextField
        value={img}
        label="img"
        variant="outlined"
        onChange={(event) => setimg(event.target.value)}
      />
      <TextField
        value={rating}
        label="Rating"
        variant="outlined"
        onChange={(event) => setRating(event.target.value)}
      />
      <TextField
        value={summary}
        label="Summary"
        variant="outlined"
        onChange={(event) => setSummary(event.target.value)}
      />
      <TextField
        value={rent_per_month}
        label="rent_per_month"
        variant="outlined"
        onChange={(event) => setrent_per_month(event.target.value)}
      />
      <Button onClick={editequipment} variant="contained" color="success">
        Save
      </Button>
    </div>
  );
}
export default Editequipment;
