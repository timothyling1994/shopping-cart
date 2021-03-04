import './App.css';
import Home from './components/Home.js';
import Store from './components/Store.js';
import Cart from './components/Cart.js';
import ProductDetail from './components/ProductDetail.js';
import { BrowserRouter,Switch,Route } from "react-router-dom";
import {useState} from "react";

function App() {

  const [cartItems,setCartItems] = useState({});

  const addToCart = (sample_pack_name) =>{
    
    let newObj = {...cartItems};
    if(!(sample_pack_name in cartItems))
    {
      newObj[sample_pack_name] = 1;
    }
    else
    {
      newObj[sample_pack_name] += 1;
    }
    setCartItems(newObj);
  };

  const getCartItems = ()=>{
    return cartItems;
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={(props)=>(<Home {...props} getCartItems={getCartItems}/>)} />
          <Route exact path="/store" render={(props)=>(<Store {...props} getCartItems={getCartItems}/>)} />
          <Route path="/cart" render={(props)=>(<Cart {...props} getCartItems={getCartItems}/>)} />
          <Route path="/store/:id" render={(props)=>(<ProductDetail {...props} addToCart={addToCart} getCartItems={getCartItems}/>)} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
