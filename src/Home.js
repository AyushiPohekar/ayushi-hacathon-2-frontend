import React from "react";
import "./Home.css";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <h1 className="welcome">Welcome to <span>OnestopRent</span></h1>
    <div className="home">
     
      <Card className="div1">
        <CardContent>
        <Typography variant="h5" component="div">
        Finest-quality products
        </Typography>
        <Typography variant="body2">
      Quality matters to you, and us! 
      <br />
      {'That is  why we do a strict quality-check for every product.'}
      </Typography>
        </CardContent>
        </Card>
        
        <Card className="div2">
        <CardContent>
        <Typography variant="h5" component="div">
        Free relocation
        </Typography>
        <Typography variant="body2">
        Changing your house or even your city?
      <br />
      {'We will relocate your rented products for free..'}
      </Typography>
        </CardContent>
        </Card>

        <Card className="div3">
        <CardContent>
        <Typography variant="h5" component="div">
        Free maintenance
        </Typography>
        <Typography variant="body2">
        Keeping your rented products in a spick and span condition is on us,
      <br />
      {'so you can sit back and relax.'}
      </Typography>
        </CardContent>
        </Card>

        <Card className="div4">
        <CardContent>
        <Typography variant="h5" component="div">
        Cancel anytime
        </Typography>
        <Typography variant="body2">
        Pay only for the time you use the product and 
      <br />
      {'close your subscription without any hassle.'}
      </Typography>
        </CardContent>
        </Card>
      
      
        <Card className="div5">
        <CardContent>
        <Typography variant="h5" component="div">
        Easy return on delivery
        </Typography>
        <Typography variant="body2">
        If you don't like the product on delivery, 
      <br />
      {' you can return it right away—no questions asked.'}
      </Typography>
        </CardContent>
        </Card>
      
        <Card className="div6">
        <CardContent>
        <Typography variant="h5" component="div">
        Keep upgrading
        </Typography>
        <Typography variant="body2">
        Bored of the same product? 
      <br />
      {'Upgrade to try another, newer design and enjoy the change!'}
      </Typography>
        </CardContent>
        </Card>
      
     
      


      {/* <img
        src="https://w7.pngwing.com/pngs/991/756/png-transparent-gray-flat-screen-tv-illustration-home-appliance-ac-power-plugs-and-sockets-remote-control-home-automation-combination-appliances-other-electronics-refrigerator.png"
        alt="bg-image"
      ></img> */}
    </div>
    <div className="btn">
      <h3>To know what we have in store <Button onClick={()=>navigate('/equipments')} variant="contained" color="primary">
      Click here
    </Button></h3>
    </div>
    </div>
  );
}
export default Home;

     <button type="button" onClick>Click here</button>
  

