import React, { useEffect, useState } from "react";
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
    <div>
      <Link className="text-3xl" to="/">
        GO-Back
      </Link>
      <h1>{product.name}</h1>
    </div>
  );
};

export default ProductScreen;
