import React from "react";
import products from "../products";
import { Link, useParams } from "react-router-dom";

const ProductScreen = () => {
  const { id } = useParams();
  console.log(id);

  const product = products.find((p) => p._id === id);
  console.log(product);

  return (
    <div>
      <h1>{product.name}</h1>
    </div>
  );
};

export default ProductScreen;
