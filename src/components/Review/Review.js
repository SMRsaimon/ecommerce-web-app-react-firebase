import { Grid } from '@material-ui/core';
import React from 'react';
import { useContext } from 'react';
import { useHistory } from 'react-router';
import { productContext } from '../../App';


import ReviewProduct from '../ReviewProduct/ReviewProduct';
import "./Review.css"

const Review = () => {

  const [, Cut] = useContext(productContext)

  let totalProductPrice = Cut.reduce((total, current) => {

    return (total + current.price * current.quentity)

  }, 0)
  totalProductPrice = totalProductPrice.toFixed(2)

  // if user not login intregate to redirate private route
  const history = useHistory()


  const heldelCheckOut = () => {
    history.push(`/CheckOut`)
  }
  return (
    <div >
      <Grid container direction="row"
        justify="center" className="review-container"   >
        <Grid item className="Card-conatiner" xs={10} md={5} lg={5}>
          <div>
            <h3>My Cart ({Cut.length} Items)</h3>
          </div>
          <div>
            <h3>Total: ${totalProductPrice}</h3>
          </div>
        </Grid>
        <Grid item className="Card-conatinerRigt" xs={10} md={5} lg={5}>
          <div className="cardsummary-container">
            <h3>Total: ${totalProductPrice}</h3>
            <button onClick={heldelCheckOut}> Check Out </button>
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