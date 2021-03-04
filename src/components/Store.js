import React,{useState} from "react";
import NavBar from "./NavBar.js";
import { Link } from "react-router-dom";
import productList from "../productList.js";
import ProductCard from "./ProductCard.js";


function Store(props) {


  const [items,setItems] = useState(productList.productList);

  return (
    <div className="store">
      <NavBar getCartItems={props.getCartItems}/>
      <div className="main-store-container">
      	<div className="categories">ALL PRODUCTS</div>
        <div className="product-list">
        {items.map((item)=>{
          return <ProductCard key={item[0]} productName={item[1]} imgName={item[2]} productPrice={item[3]}/>
        })}
        </div>
      </div>
    </div>
  );
}

export default Store;
