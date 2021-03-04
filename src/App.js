import './App.css';
import Home from './components/Home.js';
import Store from './components/Store.js';
import Cart from './components/Cart.js';
import ProductDetail from './components/ProductDetail.js';
import { BrowserRouter,Switch,Route } from "react-router-dom";
import {useState} from "react";
import productList from "./productList.js";

function App() {

  const [items,setItems] = useState(productList.productList);
  const [cartItems,setCartItems] = useState({});

  const addToCart = (addToCartObj) =>{
    
    let newObj = {...cartItems};

    const key = Object.keys(addToCartObj)[0];

    if(!(key in cartItems))
    {
      newObj[key] = {...addToCartObj[key]};
    }

    else
    {
      newObj[key].quantity += 1;
    }
    setCartItems(newObj);
  };

  const getCartItems = ()=>{
    return cartItems;
  };

  const getAllProductItems = ()=>{
    return items;
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={(props)=>(<Home {...props} getAllProductItems={getAllProductItems} getCartItems={getCartItems}/>)} />
          <Route exact path="/store" render={(props)=>(<Store {...props} getAllProductItems={getAllProductItems} getCartItems={getCartItems}/>)} />
          <Route path="/cart" render={(props)=>(<Cart {...props} getAllProductItems={getAllProductItems} getCartItems={getCartItems}/>)} />
          <Route path="/store/:id" render={(props)=>(<ProductDetail {...props} getAllProductItems={getAllProductItems} addToCart={addToCart} getCartItems={getCartItems}/>)} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
