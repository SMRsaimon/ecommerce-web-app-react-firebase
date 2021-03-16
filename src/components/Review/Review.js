import { Grid } from '@material-ui/core';
import React from 'react';
import { useContext } from 'react';
import { productContext } from '../../App';

import ReviewProduct from '../ReviewProduct/ReviewProduct';
import "./Review.css"

const Review = () => {

  const [, Cut] = useContext(productContext)

  const totalProductPrice = Cut.reduce((total, current) => {

    return total + current.price * current.quentity


  }, 0)

  return (
    <div >
      <Grid container className="review-container" >
        <Grid className="Card-conatiner" item xs={12} md={6} lg={6}>
          <div>
            <h3>My Cart ({Cut.length} Items)</h3>
          </div>
          <div>
            <h3>Total: ${totalProductPrice}</h3>
          </div>
        </Grid>
      </Grid>
      {

        Cut?.map(pd => <ReviewProduct key={pd.key} product={pd}></ReviewProduct>)
      }
    </div>
  );
};

export default Review;