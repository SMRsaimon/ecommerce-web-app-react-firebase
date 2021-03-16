import React, { useContext } from 'react';
import { productContext } from '../../App';
import ProductDetails from './ProductDetails/ProductDetails';
import "./Home.css"
import { Grid } from '@material-ui/core';



const Home = () => {

  const [products, setProducts] = useContext(productContext)


  return (
    <div className="HomeContainer">
      <Grid container spacing={4}
        justify="center" direction="row" >
        {
          products.map((pd) => <ProductDetails key={pd.key} product={pd}></ProductDetails>)

        }
      </Grid>
    </div>
  );
};

export default Home;