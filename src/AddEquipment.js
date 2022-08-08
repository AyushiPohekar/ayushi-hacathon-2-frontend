import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";

function AddEquipment({ equipmentList, setEquipmentlist }) {
  const [name, setName] = useState("");
  const [brandname, setbrandname] = useState("");
  const [rating, setRating] = useState("");
  const [img, setimg] = useState("");
  const [summary, setSummary] = useState("");
  const [rent_per_month, setrent_per_month] = useState("");

  const navigate = useNavigate();
  const addequipment = () => {
    const newequipment = {
      name: name,
      brandname: brandname,
      img: img,
      rating: rating,
      summary: summary,
      rent_per_month: rent_per_month,
    };
    setEquipmentlist([...equipmentList, newequipment]);

    // setequipmentList([...equipmentList, newequipment]);

    //POST
    //1.METHOD-POST
    //2.data and JSON
    //3.headers-JSON

    fetch(`https://62a970daec36bf40bdb78cff.mockapi.io/equipments`, {
      method: "POST",
      body: JSON.stringify(newequipment),
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
        value={brandname}
        label="BrandName"
        variant="outlined"
        onChange={(event) => setbrandname(event.target.value)}
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

      <Button onClick={addequipment} variant="contained" color="success">
        Save
      </Button>
    </div>
  );
}
export default AddEquipment;
