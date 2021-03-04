import React from "react";
import NavBar from "./NavBar.js";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard.js";


function Cart(props) {

	const cartItemsObj = props.getCartItems();

	return (
		<div className="cart">
		  <NavBar getCartItems={props.getCartItems}/>
		  <div className="main-cart-container">
		  	{Object.keys(cartItemsObj).map((key)=>{
		  		<h1>hey</h1>
		  	})}
		  </div>
		</div>
	);
}

export default Cart;
