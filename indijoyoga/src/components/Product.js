import React from "react";
import Rating from "./Rating";
import { Link } from "react-router-dom";
const Product = ({ product }) => {
  return (
    <>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <h1 className="text-4xl">{product.name}</h1>
        <Link to={`product/${product._id}`}>
          <img
            className="w-full object-cover p-4"
            src={product.image}
            alt="Sunset in the mountains"
          ></img>
        </Link>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
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
