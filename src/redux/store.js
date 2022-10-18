import { configureStore } from "@reduxjs/toolkit";
import stringMiddleware from "../middlewares/StringMiddleware";
import books from "../components/Books/books_slice";

export const store = configureStore({
  reducer: { books },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(stringMiddleware),
  devTools: process.env.NODE_ENV !== "production",
});
