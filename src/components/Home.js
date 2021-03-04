import React from "react";
import NavBar from "./NavBar.js";
import { Link } from "react-router-dom";

//<img src={drum_broker_img}></img>
function Home(props) {
  return (
    <div className="home">
      <NavBar getCartItems={props.getCartItems}/>
      <div className="main-container">
      	<div className="main-content">
      		<div className="main-img">
      			<img src={`/assets/drum_broker.jpg`}></img>
      		</div>
      		<div className="main-btn">
      			<Link to="/store" className="shop-now">SHOP NOW</Link>
      		</div>
      	</div>
      </div>
    </div>
  );
}

export default Home;
