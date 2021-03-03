import './App.css';
import Home from './components/Home.js';
import Store from './components/Store.js';
import Cart from './components/Cart.js';
import { BrowserRouter,Switch,Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/store" component={Store} />
          <Route path="/cart" component={Cart} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
