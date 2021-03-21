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
import CheckOut from "./components/CheckOut/CheckOut";
import LogIn from "./components/LogIn/LogIn";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

export const productContext = createContext()

function App() {
  const [product, setProduct] = useState([])

  const [Count, setCount] = useState([])

  const [logInUser, setLogInUser] = useState({
    displayName: "",
    email: "",
    photoURL: "",
    error: ""
  })


  useEffect(() => {
    setProduct(fakeData)
  }, []);

  console.log("app.js ", logInUser)

  return (
    <productContext.Provider value={[product, Count, setCount, logInUser, setLogInUser]}>
      <Router>
        <Header logInUser={logInUser} totalCut={Count}></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/Home">
            <Home></Home>
          </Route>
          <Route path="/Cut">
            <Review></Review>
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
          <PrivateRoute path="/Checkout">
            <CheckOut></CheckOut>
          </PrivateRoute>
          <Route path="/logIn">
            <LogIn></LogIn>
          </Route>
        </Switch>
      </Router>

    </productContext.Provider >
  );
}

export default App;
