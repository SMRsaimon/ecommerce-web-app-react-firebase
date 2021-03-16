import React from "react";
import "./ProductDetails.css";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";

const ProductDetails = (props) => {
  const { key, category, img, features, name, price, seller, stock } = props.product;

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
          <Button size="small" color="primary">
            View Details
          </Button>
          <Button variant="contained" color="primary" className="add-cut-btn" size="small" color="primary">
            <ShoppingCartOutlined /> Add to Cut
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ProductDetails;
