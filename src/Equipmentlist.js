import { Equipments } from "./Equipments";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { API } from "./global.js";

import React from "react";

function Equipmentlist({handleClick}) {
  const [equipmentlist, setEquipmentlist] = useState([]);
  

  const allEquipments = () => {
    fetch(`${API}/equipments`, { method: "GET" })
      .then((data) => data.json())
      .then((eqs) => setEquipmentlist(eqs));
  };

  useEffect(() => allEquipments(), []);

  const navigate = useNavigate();
  return (
    <div className="equipment-list">
      {equipmentlist.map((eq) => (
        <Equipments equipment={eq} key={eq.id} id={eq.id} handleClick={handleClick}/>
      ))}
    </div>
  );
}
export default Equipmentlist;
