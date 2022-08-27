import { configureStore } from "@reduxjs/toolkit";
import {
  productDetailsReducer,
  productListReducer,
} from "./reducers/productReducers";
import { cartReducer } from "./reducers/cartReducer";

const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const preloadedState = {
  cart: { cartItems: cartItemsFromStorage },
};

const reducer = {
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
};

const store = configureStore({
  reducer,
  preloadedState,
  devTools: process.env.NODE_ENV !== "production", //only show devTools when in production
});

export default store;
