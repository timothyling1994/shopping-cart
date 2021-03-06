import React,{useState} from "react";
import { Link } from "react-router-dom";


function CheckOutProductCards(props) {

	const decrementQuantity = () =>{
		
	};	

  return (
    <div className="checkOutProductCards">
      <Link to={`/store/${props.imgName}`}><img className="checkout-sample-packs" src={`/assets/${props.imgName}.jpg`}></img></Link>
      <div className="productName">{(props.productName).toUpperCase()}</div>
      <div className="price">${props.productPrice} x{props.quantity}</div>
      <div className="quantity-toggle">
      	<div className="decrement" onClick={decrementQuantity}>-</div>
      	<div className="increment">+</div>
      </div>
    </div>
  );
}

export default CheckOutProductCards;
