import React from "react";
import Rating from "./Rating";
import { Link } from "react-router-dom";
const Product = ({ product }) => {
  return (
    <>
      <div className="mt-14 h-full max-w-sm rounded overflow-hidden shadow-lg">
        <h1 className="text-2xl h-24 text-center pt-6 font-semibold">
          {product.name}
        </h1>
        <Link to={`product/${product._id}`}>
          <img
            className="w-full object-cover p-4"
            src={product.image}
            alt="Sunset in the mountains"
          ></img>
        </Link>
        <div className="px-6 py-4">
          <div className="font-bold text-center text-xl mb-2 h-20">
            {product.name}
          </div>
          <p className="text-gray-700 text-base h-28">{product.description}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          {product.rating} from {product.numReviews} reviews
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </div>
      </div>
    </>
  );
};

export default Product;
