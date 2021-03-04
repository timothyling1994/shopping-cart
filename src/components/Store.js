import React,{useState} from "react";
import NavBar from "./NavBar.js";
import { Link } from "react-router-dom";
import productList from "../productList.js";
import ProductCard from "./ProductCard.js";


function Store(props) {

  const allProductsObj = props.getAllProductItems();

  return (
    <div className="store">
      <NavBar getCartItems={props.getCartItems}/>
      <div className="main-store-container">
      	<div className="categories">ALL PRODUCTS</div>
        <div className="product-list">
          {Object.keys(allProductsObj).map((key)=>{
            return <ProductCard key={allProductsObj[key].id} productName={key} imgName={allProductsObj[key].samplePackNum} productPrice={allProductsObj[key].samplePackPrice}/>
          })}
        </div>
      </div>
    </div>
  );
}

export default Store;
