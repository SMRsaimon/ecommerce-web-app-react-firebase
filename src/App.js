import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import './App.css';
import fakeData from "../src/product/fakeData"


import Home from './components/Home/Home';
import Review from './components/Review/Review';
import Inventory from './components/Inventory/Inventory';
import { createContext, useState, useEffect } from 'react';

import Header from './components/Header/Header';
import ProductDetails from './components/ProductDetails/ProductDetails';

export const productContext = createContext()

function App() {
  const [product, setProduct] = useState([])

  const [Count, setCount] = useState([])

  useEffect(() => {
    setProduct(fakeData)
  }, []);

  return (
    <productContext.Provider value={[product, Count, setCount]}>
      <Router>
        <Header totalCut={Count}></Header>
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
          <Route path="/productDetails/:id">
            <ProductDetails></ProductDetails>
          </Route>
        </Switch>
      </Router>

    </productContext.Provider >
  );
}

export default App;
