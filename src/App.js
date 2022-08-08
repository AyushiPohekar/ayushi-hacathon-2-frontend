import "./App.css";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import { useState } from "react";
import { Equipments } from "./Equipments";
import Equipmentlist from "./Equipmentlist";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { EquipmentDetails } from "./EquipmentDetails";
import React from "react";
import IconButton from "@mui/material/IconButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Box from "@mui/material/Box";
import Badge from "@mui/material/Badge";
import Editequipment from "./EditEquipment";
import AddEquipment from "./AddEquipment";
import Cart from "./cart";

function App() {
  // const equipments = [
  //   {
  //     id: "1",
  //     name: " Nikon Camera",
  //     brandname: "Nikon",
  //     rating: 4.4,
  //     summary:
  //       "24.2MP Mirrorless Camera with 16-50mm Power Zoom Lens (APS-C Sensor, Real-Time Eye Auto Focus, 4K Vlogging Camera, Tiltable LCD)",
  //     rent_per_month: 3000,
  //     img: "https://m.media-amazon.com/images/I/71pbiTKTCnL._SX355_.jpg",
  //   },

  //   {
  //     id: "2",
  //     name: "Canon Camera",
  //     brandname: "Canon",
  //     rating: 4.2,
  //     summary:
  //       "50MP Camera (Black) with 16-50mm Power Zoom Lens (APS-C Sensor, Real-Time Eye Auto Focus, 4K Vlogging Camera) ",
  //     rent_per_month: 2950,
  //     img: "https://photographylife.com/wp-content/uploads/2015/02/Canon-EOS-5DS.jpg",
  //   },

  //   {
  //     id: "3",
  //     name: "Sony Camera",
  //     brandname: "Sony",
  //     rating: 4.2,
  //     summary: "20MP Camera (Black) with 26-50mm Power Zoom Lens ",
  //     rent_per_month: 2900,
  //     img: "https://m.media-amazon.com/images/I/71quG6wrVtL._SL1200_.jpg",
  //   },

  //   {
  //     id: "4",
  //     name: "Panasonic Camera",
  //     brandname: "Panasonic",
  //     rating: 4.3,
  //     summary:
  //       "25MP Camera (Black)(APS-C Sensor, Real-Time Eye Auto Focus, 4K Vlogging Camera) ",
  //     rent_per_month: 2900,
  //     img: "https://m.media-amazon.com/images/I/917LEZ+it3L._SY450_.jpg",
  //   },

  //   {
  //     id: "5",
  //     name: "Olympus Camera",
  //     brandname: "Olympus",
  //     rating: 4.1,
  //     summary:
  //       "26MP Mirrorless Camera with 16-50mm Power Zoom Lens (APS-C Sensor, 4K Vlogging Camera, Tiltable LCD) ",
  //     rent_per_month: "3100",
  //     img: "https://m.media-amazon.com/images/I/61FgU5-3XOL._SX425_.jpg",
  //   },

  //   {
  //     id: "6",
  //     name: "Samsung Fridge",
  //     brandname: "Samsung",
  //     rating: 3.9,
  //     summary: "700 L, 5 star Inverter Frost Free Side-by-Side Refrigerator",
  //     rent_per_month: 3500,
  //     img: "https://m.media-amazon.com/images/I/61BLikx-rOL._SY500_.jpg",
  //   },

  //   {
  //     id: "7",
  //     name: "Onida Fridge",
  //     brandname: "Onida",
  //     rating: 3.7,
  //     summary: "Onida RDS1001SG 92 L 1 Star Single Door Refrigerator",
  //     rent_per_month: 3200,
  //     img: "https://cdn1.smartprix.com/rx-ig4lZH5JT-w420-h420/onida-rds1001sg-92-l.webp",
  //   },

  //   {
  //     id: "8",
  //     name: "Videocon Fridge",
  //     brandname: "Videocon",
  //     rating: 3.8,
  //     summary: "492 L 4 Star Direct Cool Single Door Refrigerator",
  //     rent_per_month: 4100,
  //     img: "https://5.imimg.com/data5/BP/WR/MY-35175689/videocon-refrigerator-500x500.jpg",
  //   },

  //   {
  //     id: "9",
  //     name: "Bosch Fridge",
  //     brandname: "Bosch",
  //     rating: 3.6,
  //     summary:
  //       "Bosch Serie 6 559 Litres 2 Star Frost Free Inverter Double Door Bottom Mount Refrigerator (Multi Air Flow Cooling Technology, KGN56LB41I, Black)",
  //     rent_per_month: 3950,
  //     img: "https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1605279886/Croma%20Assets/Large%20Appliances/Refrigerator/Images/8971457888286.png/mxw_1440,f_auto",
  //   },

  //   {
  //     id: "10",
  //     name: "Godrej Fridge",
  //     brandname: "Godrej",
  //     rating: 3.7,
  //     summary:
  //       "Godrej 343 L Frost Free Double Door 2 Star Refrigerator  (Ebony, R T Eon 343SG 2.4 Ebony)",
  //     rent_per_month: 4150,
  //     img: "https://rukminim1.flixcart.com/image/416/416/refrigerator-new/e/u/e/godrej-rt-eon-343-sg-2-4-original-imaejyepsgfxv645.jpeg?q=70",
  //   },

  //   {
  //     id: "11",
  //     name: "LG AC",
  //     brandname: "LG",
  //     rating: 3.7,
  //     summary:
  //       "Spilt Ac with inverter compressor,Capacity: 1.5 Ton,Energy rating: 4 star",
  //     rent_per_month: 5000,
  //     img: "https://static.digit.in/default/3fc1a9e55e49d1b26736287e752ffceeae017e35.jpeg?tr=w-1200",
  //   },

  //   {
  //     id: "12",
  //     name: "Daikin AC",
  //     brandname: "Daikin",
  //     rating: 3.3,
  //     summary:
  //       "Window Ac with inverter compressor,Capacity: 2.0 Ton,Energy rating: 4 star",
  //     rent_per_month: 4500,
  //     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB6ZHItr9F4sTDiSVEQiVQoSsbRTRASwx9tg&usqp=CAU",
  //   },

  //   {
  //     id: "13",
  //     name: "Panasonic AC",
  //     brandname: "Panasonic",
  //     rating: 3.9,
  //     summary:
  //       "Window Ac with inverter compressor,Capacity: 1.5 Ton,Energy rating: 3 star",
  //     rent_per_month: 4490,
  //     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpuSu3gYUMjVSLszyMYjhdU21x6ucVp69-JQ&usqp=CAU",
  //   },

  //   {
  //     id: "14",
  //     name: "Bluestar AC",
  //     brandname: "Bluestar",
  //     rating: 4.0,
  //     summary:
  //       "Spilt Ac with inverter compressor,Capacity: 1.5 Ton,Energy rating: 4 star",
  //     rent_per_month: 4350,
  //     img: "https://vetrihomeappliances.com/wp-content/uploads/2021/11/BLUESTAR-1.5-Ton-3-Star-IC318RBTU-Inverter-Split-AC.jpg",
  //   },

  //   {
  //     id: "15",
  //     name: "Godrej AC",
  //     brandname: "Godrej",
  //     rating: 3.2,
  //     summary:
  //       "Split Ac with inverter compressor,Capacity: 1.5 Ton,Energy rating: 4 star",
  //     rent_per_month: 4800,
  //     img: "https://cdn.godrej.com/img/Product/GIC24ITC3WTAfront_P24104658.jpg",
  //   },

  //   {
  //     id: "16",
  //     name: "Samsung Washing Machine",
  //     brandname: "Samsung",
  //     rating: 4.2,
  //     summary:
  //       "8 Kg 5 Star Inverter,  Fully-Automatic Front Loading Washing Machine",
  //     rent_per_month: 4700,
  //     img: "https://images.samsung.com/is/image/samsung/in-combo-wd80j6410as-wd80j6410as-tl-gray-261177806?$650_519_PNG$",
  //   },

  //   {
  //     id: "17",
  //     name: "Godrej Washing Machine",
  //     brandname: "Godrej",
  //     rating: 4.3,
  //     summary:
  //       "6 Kg 5 Star Inverter,  Fully-Automatic Top Loading Washing Machine",
  //     rent_per_month: 4200,
  //     img: "https://static.toiimg.com/thumb/resizemode-4,msid-54157817,width-250/54157817.jpg",
  //   },

  //   {
  //     id: "18",
  //     name: "IFB Washing Machine",
  //     brandname: "IFB",
  //     rating: 4.3,
  //     summary:
  //       "6.5 Kg 5 Star Inverter,  Fully-Automatic Top Loading Washing Machine",
  //     rent_per_month: 4999,
  //     img: "https://m.media-amazon.com/images/I/71677TGtghL._SL1500_.jpg",
  //   },

  //   {
  //     id: "19",
  //     name: "LG Washing Machine",
  //     brandname: "LG",
  //     rating: 4.2,
  //     summary:
  //       "7.5 Kg 5 Star Inverter,  Semi-Automatic Top Loading Washing Machine",
  //     rent_per_month: 4600,
  //     img: "https://www.lg.com/in/images/washing-machines/md07533829/gallery/P7515SRAZ-Washing-Machines-Front-View-D-01-v1.jpg",
  //   },

  //   {
  //     id: "20",
  //     name: "Videocon Washing Machine",
  //     brandname: "Videocon",
  //     rating: 4.2,
  //     summary:
  //       "6 Kg 4 Star Inverter,  Semi-Automatic Top Loading Washing Machine",
  //     rent_per_month: 4300,
  //     img: "https://static.toiimg.com/thumb/resizemode-4,msid-54158155,width-250/54158155.jpg",
  //   },

  //   {
  //     id: "21",
  //     name: "HP Laptop",
  //     brandname: "HP",
  //     rating: 4.4,
  //     summary:
  //       "HP 15s AMD Ryzen 3- 5300U (8GB RAM/512GB SSD, Micro-Edge, Anti-Glare Display/Radeon Graphics)",
  //     rent_per_month: 2200,
  //     img: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c06731786.png",
  //   },

  //   {
  //     id: "22",
  //     name: "Dell Laptop",
  //     brandname: "Dell",
  //     rating: 4.7,
  //     summary:
  //       "Intel i7-1145G7, 8GB DDR4 & 512GB SSD, Win 11 + MSO'21, 14.0 (35.56Cms)",
  //     rent_per_month: 2300,
  //     img: "https://static.toiimg.com/thumb/resizemode-4,msid-81972637,imgsize-709202,width-720/81972637.jpg",
  //   },

  //   {
  //     id: "23",
  //     name: "Acer Laptop",
  //     brandname: "Acer",
  //     rating: 3.9,
  //     summary:
  //       "Intel i3-1135G7, 8GB DDR4 & 512GB SSD, Win 11 + MSO'21, 14.0 (35.56Cms) FHD",
  //     rent_per_month: 2450,
  //     img: "https://4.imimg.com/data4/RJ/KM/MY-3155617/acer-laptop-500x500.jpg",
  //   },

  //   {
  //     id: "24",
  //     name: "Sony Laptop",
  //     brandname: "Sony",
  //     rating: 4,
  //     summary:
  //       "Intel i5-1135G9, 8GB DDR4 & 512GB SSD, Win 11 + MSO'21, 14.0 (35.56Cms) FHD",
  //     rent_per_month: 2350,
  //     img: "https://5.imimg.com/data5/XT/AA/MY-41250311/sony-vaio-laptop-250x250.jpg",
  //   },

  //   {
  //     id: "25",
  //     name: "Asus Laptop",
  //     brandname: "Asus",
  //     rating: 4.1,
  //     summary:
  //       "Intel i5-1135G9, 8GB DDR4 & 1024GB SSD, Win 11 + MSO'21, 14.0 (35.56Cms) FHD",
  //     rent_per_month: 2400,
  //     img: "https://www.asus.com/media/IN/products/gh7f5x7fznxj1wrn/P_setting_xxx_0_90_end_2000.png",
  //   },
  // ];
  const navigate = useNavigate();
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
  const handleClick = (equipment) => {
    setCart([...cart, equipment]);
  };
  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };
  const size = cart.length;
  return (
    <div className="App">
      <Box sx={{ flexGrow: 1 }}></Box>
      <AppBar position="static" className="navbar">
        <Toolbar>
          <Button onClick={() => navigate("/")} color="inherit">
            Home
          </Button>
          <Button onClick={() => navigate("/equipments")} color="inherit">
            Equipments
          </Button>
          <Button onClick={() => navigate("/equipments/add")} color="inherit">
            Add Equipments
          </Button>
          <Badge badgeContent={size} color="error">
            <IconButton
              color="inherit"
              aria-label="addtocart"
              onClick={() => navigate("/equipments/cart")}
            >
              <AddShoppingCartIcon />
            </IconButton>
          </Badge>
        </Toolbar>
      </AppBar>

      <section className="route-container">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/register" element={<Register />} />
          <Route
            path="/equipments"
            element={<Equipmentlist handleClick={handleClick} />}
          />
          <Route path="/equipments/:id" element={<EquipmentDetails />} />
          <Route path="/equipments/edit/:id/edit" element={<Editequipment />} />
          <Route
            path="/equipments/cart"
            element={
              <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
            }
          />
          <Route path="/equipments/add" element={<AddEquipment />} />
        </Routes>
      </section>
    </div>
  );
}

export default App;
