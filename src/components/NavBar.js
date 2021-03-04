import React from "react";
import {Link} from "react-router-dom";

function NavBar(props) {

	const displayCartItemQuantity = () => {
		const cartItemObj = props.getCartItems();

		let totalItems = 0;
	    for (let prop in cartItemObj)
	    {
	      totalItems += cartItemObj[prop].quantity;
	    }
	    return totalItems;
	};

  return (
    <div className="navBar">
      <div className="storeName-container"><Link to="/" className="storeName">THE DRUM BROKER</Link></div>
      <Link to="/store" className="shop-btn">SHOP</Link>
      <Link to="/cart" className="shopping-cart">CART [{displayCartItemQuantity()}]</Link>
    </div>
  );
}

export default NavBar;
