import { React, useState, useEffect } from "react";
import Product from "../components/Product";
import axios from "axios";

const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios.get("/api/products");

      setProducts(res.data);
    };

    fetchProducts();
  }, []);

  return (
    <>
      <div className="grid grid-cols-3 justify-items-center gap-16  mx-40">
        {products.map((el) => (
          <div key={el._id}>
            <Product product={el} />
          </div>

          // {<h1>{el.name}</h1>}
        ))}
      </div>
    </>
  );
};

export default HomeScreen;
