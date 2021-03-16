import React, { useContext } from 'react';
import { productContext } from '../../App';
import Shop from './Shop/Shop';
import "./Home.css"
import { Grid } from '@material-ui/core';



const Home = () => {

  const [products, setProducts] = useContext(productContext)



  return (
    <div className="HomeContainer">
      <Grid container spacing={4}
        justify="center" direction="row" >
        {
          products.map((pd) => <Shop key={pd.key} product={pd}></Shop>)

        }
      </Grid>
    </div>
  );
};

export default Home;