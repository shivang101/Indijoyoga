import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import { Link } from "react-router-dom";
import { addToCart, removeFromCart } from "../actions/cartActions";
import { useLocation, useParams, useNavigate } from "react-router-dom";

export default function CartScreen() {
  const { id: productId } = useParams();
  const qty = new URLSearchParams(useLocation().search).get("qty");

  const dispatch = useDispatch();
  console.log(Number(qty));
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  console.log(cartItems);

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, Number(qty)));
    }
  }, [dispatch, productId, qty]);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };
  const navigate = useNavigate();
  const checkoutHandler = () => {
    navigate(`/login?redirect=${"/shipping"}`);
  };

  return (
    <>
      {cartItems.length === 0 ? (
        <div className="w-2/3 ml-10">
          <span className="text-4xl font-semibold">Shopping Cart</span>
          <Message variant={"Your Cart is empty"}>
            <Link to="/">Go Back</Link>
          </Message>
        </div>
      ) : (
        <>
          <section className="flex mt-10 gap-x-48">
            <div className="w-max ml-32 ">
              <div className="text-5xl mb-10 font-bold">Shopping Cart</div>
              {cartItems.map((item) => (
                <section
                  className="flex items-center gap-12 mb-6 border-b-2 p-2"
                  key={item.product}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-32 h-32"
                  ></img>

                  <div className="text-xl font-bold w-40">{item.name}</div>

                  <div className="text-xl font-semibold">${item.price}</div>

                  <div>
                    <select
                      className="text-center border-4 border-t-0 p-3"
                      value={item.qty}
                      onChange={(e) => {
                        dispatch(
                          addToCart(item.product, Number(e.target.value))
                        );
                      }}
                    >
                      {[...Array(item.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <button
                      onClick={() => removeFromCartHandler(item.product)}
                      className=" bg-black hover:bg-white hover:text-black text-white font-bold py-2 px-4 border border-white-700 rounded w-full disabled:cursor-not-allowed"
                      type="button"
                    >
                      <i className="fa-solid fa-trash-can"></i>
                    </button>
                  </div>
                </section>
              ))}
            </div>

            <div className="border-4 border-gray-400 h-min p-2">
              <h2 className="text-3xl font-medium  ">
                SUBTOTAL ({cartItems.reduce((acc, item) => acc + item.qty, 0)})
                ITEMS
              </h2>
              <article className="font-semibold text-xl text-right mt-4">
                $
                {cartItems
                  .reduce((acc, item) => acc + item.price * item.qty, 0)
                  .toFixed(2)}
              </article>
              <div className=" mt-8 mb-2">
                <button
                  onClick={() => checkoutHandler()}
                  className=" bg-black hover:bg-white hover:text-black text-white font-bold py-2 px-4 border border-white-700 rounded w-full disabled:cursor-not-allowed"
                  type="button"
                >
                  Procced to Checkout
                </button>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
}
