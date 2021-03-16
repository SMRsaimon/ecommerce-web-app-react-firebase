import React from 'react';
import { useContext } from 'react';
import { productContext } from '../../App';

const Review = () => {

  const [product, Cut, setCut] = useContext(productContext)

  console.log(product, Cut)
  return (
    <div>
      <h1> This is review page :{Cut.length}</h1>
    </div>
  );
};

export default Review;