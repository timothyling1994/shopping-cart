import React,{useState} from "react";
import { Link } from "react-router-dom";



function ProductCard(props) {

  return (
    <div className="productCard">
      <img className="sample-packs" src={`/assets/${props.imgName}.jpg`}></img>
      <div className="productName">{props.productName}</div>
      <div className="price">${props.productPrice}</div>
    </div>
  );
}

export default ProductCard;
