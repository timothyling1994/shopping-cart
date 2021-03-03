import './App.css';
import Home from './components/Home.js';
import Store from './components/Store.js';
import Cart from './components/Cart.js';
import ProductDetail from './components/ProductDetail.js';
import { BrowserRouter,Switch,Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/store" component={Store} />
          <Route path="/cart" component={Cart} />
          <Route path="/store/:id" component={ProductDetail} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
