import React, { useEffect, useState } from "react";
import Rating from "../components/Rating";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const ProductScreen = () => {
  const [product, setProduct] = useState({});

  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await axios.get(`/api/products/${id}`);
      console.log(res);

      setProduct(res.data);
    };

    fetchProduct();
  }, [id]);

  return (
    <>
      <div className="grid grid-custom mt-12 justify-center gap-12">
        <div className="max-w-xl">
          <Link className="p-4 text-xl " to="/">
            GO BACK
          </Link>
          <img
            src={product.image}
            alt={product.name}
            className="w-full object-cover p-4"
          ></img>
        </div>

        <div className="flex w-56 mt-12 text-xl flex-col gap-3">
          <h1 className="text-3xl mb-5 font-semibold">{product.name}</h1>

          <hr></hr>

          <div className="flex gap-3">
            <Rating
              value={product.rating}
              text={`${product.numReviews} reviews`}
            />
            {product.numReviews} Reviews
          </div>
          <hr></hr>

          <div className="font-bold">Price ${product.price}</div>

          <hr></hr>

          <div className="mt-5">{product.description}</div>
        </div>

        <div className="flex w-60 mt-12 flex-col">
          <div className="flex border-4 p-3 justify-between">
            <span>Price:</span>
            <span>{product.price}</span>
          </div>

          <div className="flex border-4 border-t-0 p-3 justify-between">
            <span>Status:</span>
            <span>
              {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
            </span>
          </div>

          <div className="flex border-4 border-t-0 p-3 justify-center ">
            <button
              className=" bg-black hover:bg-white hover:text-black text-white font-bold py-2 px-4 border border-white-700 rounded w-full disabled:cursor-not-allowed"
              type="button"
              disabled={product.countInStock === 0}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductScreen;
