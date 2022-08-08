import { Equipments } from "./Equipments";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { API } from "./global.js";

import React from "react";

function Equipmentlist({handleClick}) {
  const [equipmentlist, setEquipmentlist] = useState([]);
  const [query, setQuery] = useState("")

  const allEquipments = () => {
    fetch(`${API}/equipments`, { method: "GET" })
      .then((data) => data.json())
      .then((eqs) => setEquipmentlist(eqs));
  };

  useEffect(() => allEquipments(), []);

  const navigate = useNavigate();
  return (
    <div>
    <div className="search">
      <input placeholder="Camera,fridge,laptop,etc" onChange={event => setQuery(event.target.value)}/>
      </div>
    <div className="equipment-list">
      {equipmentlist.filter(eq=>{if(query===''){return eq;}
      else if(eq.name.toLowerCase().includes(query.toLowerCase()))
      {return eq;}
      })
      .map((eq) => (
        <Equipments equipment={eq} key={eq.id} id={eq.id} handleClick={handleClick}/>
      ))}
    </div>
    </div>
    
  );
}
export default Equipmentlist;
