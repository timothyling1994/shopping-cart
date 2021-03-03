import React from "react";
import {Link} from "react-router-dom";

function NavBar() {
  return (
    <div className="navBar">
      <Link to="/" className="storeName">THE DRUM BROKER</Link>
      <Link to="/store" className="shop-btn">SHOP</Link>
      <Link to="/cart" className="shopping-cart">CART</Link>
    </div>
  );
}

export default NavBar;
