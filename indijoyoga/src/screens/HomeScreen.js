import React from "react";
import products from "../products";
import Product from "../components/Product";
const HomeScreen = () => {
  return (
    <>
      <div className="grid grid-cols-3 justify-items-center gap-20 mx-40">
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
