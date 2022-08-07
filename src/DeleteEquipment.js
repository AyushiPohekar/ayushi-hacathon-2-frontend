
import {useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

export function DeleteEquipment() {
    const{id}=useParams();
   
    const [equipmentList, setequipmentList] = useState([]);
  
    const getequipments = () => {
      fetch(`https://62a970daec36bf40bdb78cff.mockapi.io/equipments`, { method: "GET" })
        .then((data) => data.json())
        .then((eqs) => setequipmentList(eqs));
    };
  
    useEffect(() => getequipments(), []);
  
    //delete first refresh later
    const deleteequipment = (id) => {
      fetch(`https://62a970daec36bf40bdb78cff.mockapi.io/equipments/${id}`, {
        method: "DELETE",
      })
        .then((data) => data.json())
        .then(() => getequipments());
    };
    return(
        <IconButton color="error" onClick={()=>deleteequipment(id)} aria-label="Movie-Delete">
     <DeleteIcon  />Delete Equipment.
    </IconButton>
    )
}