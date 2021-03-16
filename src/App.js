
import './App.css';
import Header from './components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Home from './components/Home/Home';
import Review from './components/Review/Review';
import Inventory from './components/Inventory/Inventory';
import { createContext, useState, useEffect } from 'react';

import productDetails from "../src/product/fakeData"

export const productContext = createContext()

function App() {
  const [product, setProduct] = useState([])

  useEffect(() => {

    setProduct(productDetails)

  }, []);

  return (
    <productContext.Provider value={[product, setProduct]}>
      <Router>

        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/Home">
            <Home></Home>
          </Route>
          <Route path="/Review">
            <Review></Review>
          </Route>
          <Route path="/Inventory">
            <Inventory></Inventory>
          </Route>

        </Switch>
      </Router>

    </productContext.Provider >
  );
}

export default App;
