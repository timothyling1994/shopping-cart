import React from "react";
import NavBar from "./NavBar.js";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard.js";
import productList from "../productList.js";
import CheckOutProductCards from "./CheckOutProductCards.js";


function Cart(props) {
	let subTotal = 0;

	const cartItemsObj = props.getCartItems();

	const getSubTotal = () =>{
		Object.keys(cartItemsObj).map(key=>{
			subTotal += Math.round((cartItemsObj[key].samplePackPrice * cartItemsObj[key].quantity)*100)/100;
		});
		return subTotal.toFixed(2);
	}

	return (
		<div className="cart">
		  <NavBar getCartItems={props.getCartItems}/>
		  <div className="main-cart-container">
		  	<div className="checkOut">CHECKOUT</div>
		  	{Object.keys(cartItemsObj).map((key)=>{
		  		return <CheckOutProductCards imgName={cartItemsObj[key].samplePackNum} productName={key} productPrice={cartItemsObj[key].samplePackPrice} quantity={cartItemsObj[key].quantity}/>
		  	})}
		  	<div className="subTotal">SUBTOTAL: ${getSubTotal()}</div>
		  	<div className="proceedToPayment">PROCEED TO PAYMENT</div>
		  </div>
		</div>
	);
}

export default Cart;
