import { configureStore } from "@reduxjs/toolkit";
import {
  productDetailsReducer,
  productListReducer,
} from "./reducers/productReducers";

const preloadedState = {};

const reducer = {
  productList: productListReducer,
  productDetails: productDetailsReducer,
};

const store = configureStore({
  reducer,
  preloadedState,
  devTools: process.env.NODE_ENV !== "production", //only show devTools when in production
});

export default store;
