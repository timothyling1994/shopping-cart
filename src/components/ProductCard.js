import React,{useState} from "react";
import { Link } from "react-router-dom";


function ProductCard(props) {

  return (
    <div className="productCard">
      <Link to={`/store/${props.imgName}`}><img className="sample-packs" src={`/assets/${props.imgName}.jpg`}></img></Link>
      <div className="productName">{(props.productName).toUpperCase()}</div>
      <div className="price">${props.productPrice}</div>
    </div>
  );
}

export default ProductCard;
