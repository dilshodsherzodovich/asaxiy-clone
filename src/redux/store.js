import { configureStore } from "@reduxjs/toolkit";
import stringMiddleware from "../middlewares/StringMiddleware";
import books from "../components/Books/books_slice";
import products from "../components/Products/products_slice";
import cart from "../pages/Cart/cart_slice";

export const store = configureStore({
  reducer: { books, products, cart },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(stringMiddleware);
  },
  devTools: process.env.NODE_ENV !== "production",
});
