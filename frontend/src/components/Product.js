import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import Rating from "./Rating";

const Product = ({ product }) => {
  return (
    <Card
      className="my-3 px-4 p-4"
      border="primary"
      style={{ borderRadius: "12px" }}
    >
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant="top" />
      </Link>

      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as="div">
            <strong>{product.name}</strong> <span></span>
          </Card.Title>
        </Link>

        <Card.Text as="div">
          {product.rating && (<Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />)}
        </Card.Text>

        <Card.Text as="h3">₹{product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
