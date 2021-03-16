import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import { useContext } from "react";
import { useParams } from "react-router";
import { productContext } from "../../App";
import "./ProductDetails.css";
import { Link } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();

  const [product] = useContext(productContext);
  const targetProduct = product.find((x) => x.key === id);
  const { key, category, img, features, name, price, seller, stock } = targetProduct;

  return (
    <>
      {targetProduct ? (
        <Grid container justify="center">
          <Grid item xs={10} sm={8} md={8}>
            <Card className="card-conatiner">
              <CardActionArea>
                <img className="details-single-img" src={img} alt="" srcset="" />
                <CardContent>
                  <Typography gutterBottom variant="p" component="p">
                    Product Name: {name}
                  </Typography>
                  <Typography variant="body2" color="textPrimary" component="p">
                    category: {category}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Product Key: {key}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    seller: {seller}
                  </Typography>
                  <Typography variant="body2" color="textPrimary" component="p">
                    Price : ${price}
                  </Typography>
                  <Typography variant="body2" color="textPrimary" component="p">
                    Stock: ${stock}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <br></br>
              <br></br>
              <CardActions className="add-cut-btn-container">
                <Link to="/Home">
                  <Button size="small" color="primary">
                    Back to Home Page
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      ) : (
        <Card className="card-conatiner">
          <CardActions className="add-cut-btn-container">
            <Link to="/Home">
              <Button size="small" color="primary">
                Back to Home Page and try Again...
              </Button>
            </Link>
          </CardActions>
        </Card>
      )}
    </>
  );
};

export default ProductDetails;
