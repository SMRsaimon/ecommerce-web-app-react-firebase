import React from "react";
import "./Shop.css";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";
import { useHistory } from "react-router";
import { useContext } from "react";
import { productContext } from "../../../App";
import { addToDatabaseCart, getDatabaseCart } from "../../../product/utilities/databaseManager";
import { useEffect } from "react";
import fakeData from "../../../product/fakeData";

const Shop = (props) => {
  const { key, category, img, features, name, price, seller, stock } = props.product;

  const [Product, Cut, setCut] = useContext(productContext);
  const history = useHistory();

  const hendelDetails = (key) => {
    const url = `/productDetails/${key}`;
    history.push(url);
  };

  //   get data from data base

  useEffect(() => {
    const selectedProduct = getDatabaseCart();
    const productKeys = Object.keys(selectedProduct);

    const totalProduct = productKeys.map((x) => {
      const product = fakeData.find((pd) => pd.key === x);
      product.quentity = selectedProduct[x];
      return product;
    });
    setCut(totalProduct);
  }, []);

  // Cut product hendeling

  const hendelProductCut = (product) => {
    const isDublicate = Cut.find((pd) => pd.key === product.key);
    let count = 1;
    let NewCut;
    if (isDublicate) {
      count = product.quentity + 1;
      product.quentity = count;

      const remainningProduct = Cut.filter((pd) => pd.key !== product.key);
      NewCut = [...remainningProduct, isDublicate];
    } else {
      product.quentity = count;
      NewCut = [...Cut, product];
    }
    setCut(NewCut);
    addToDatabaseCart(product.key, count);
  };

  return (
    <Grid item xs={8} sm={6} md={3}>
      <Card className="card-conatiner">
        <CardActionArea>
          <img className="Card-img" src={img} alt="" srcset="" />
          <CardContent>
            <Typography gutterBottom variant="p" component="p">
              {name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {category}
            </Typography>
            <Typography variant="body2" color="textPrimary" component="p">
              ${price}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className="add-cut-btn-container">
          <Button onClick={() => hendelDetails(key)} size="small" color="primary">
            View Details
          </Button>
          <Button onClick={() => hendelProductCut(props.product)} variant="contained" color="primary" className="add-cut-btn" size="small">
            <ShoppingCartOutlined /> Add to Cut
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Shop;
