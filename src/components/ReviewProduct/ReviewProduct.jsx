import { Grid } from "@material-ui/core";
import React, { useContext } from "react";
import { productContext } from "../../App";
import { addToDatabaseCart, removeFromDatabaseCart } from "../../product/utilities/databaseManager";
import "./ReviewProduct.css";

const ReviewProduct = (props) => {
  const [product, Cut, setCut] = useContext(productContext);
  const { key, quentity, img, name, price, stock } = props.product;

  console.log(props.product);

  // Hendel quentity update
  const hendelQuentityIncress = (id) => {
    const targetPD = Cut.find((x) => x.key === id);
    targetPD.quentity = targetPD.quentity + 1;
    const NewPD = Cut.filter((x) => x.key !== id);
    setCut([...NewPD, targetPD]);
    let count = targetPD.quentity;
    addToDatabaseCart(id, count);
  };
  // Hendel decrement

  const hendelQuentityDecrement = (id) => {
    const targetPD = Cut.find((x) => x.key === id);
    targetPD.quentity = targetPD.quentity >= 2 ? targetPD.quentity - 1 : targetPD.quentity;
    const NewPD = Cut.filter((x) => x.key !== id);
    setCut([...NewPD, targetPD]);
    let count = targetPD.quentity;
    addToDatabaseCart(id, count);
  };
  // Hendel product remove
  const hendelRemove = (id) => {
    const newIteam = Cut.filter((x) => x.key !== id);
    setCut(newIteam);
    removeFromDatabaseCart(id);
  };

  return (
    <Grid container className="review-container">
      <Grid className="Card-conatiner" item xs={12} md={6} lg={6}>
        <div className="image-container-review-product">
          <img src={img} alt="" srcset="" />
          <small>{name}</small>
          <p>Stock: {stock}</p>
          <button onClick={() => hendelRemove(key)}>Remove Iteam</button>
        </div>
        <div className="quentity-control-fild">
          <button onClick={() => hendelQuentityIncress(key)}>+</button>
          <input type="number" name="quentity" value={quentity} id="" />
          <button onClick={() => hendelQuentityDecrement(key)}>-</button>
        </div>
        <div className="price-container">
          <h3>Price : ${price}</h3>
        </div>
      </Grid>
    </Grid>
  );
};

export default ReviewProduct;
