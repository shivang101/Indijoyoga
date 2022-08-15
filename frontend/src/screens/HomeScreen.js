import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "../components/Product";
import { listProducts } from "../actions/productActions";
import Loader from "../components/Loader";
import Message from "../components/Message";

const HomeScreen = () => {
  // const [products, setProducts] = useState([]);

  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, products, error } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  // const products = [];
  return (
    <>
      <h1 className="text-4xl font-semibold text-center">Latest Products</h1>
      {loading && <Loader></Loader>}
      {error && <Message variant={error}></Message>}

      {!error && (
        <div className="grid grid-cols-3 justify-items-center gap-16  mx-40">
          {products.map((el) => (
            <div key={el._id}>
              <Product product={el} />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default HomeScreen;
