import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useHttp } from "../../hooks/useHttp";
import { BOOKS_API } from "../../config";

const initialState = {
  books: [],
  booksLoadingStatus: "not loading",
};

export const fetchBooks = createAsyncThunk("books/fetchbooks", async () => {});

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state, action) => {
        state.booksLoadingStatus = "loading";
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.books = action.payload;
        state.booksLoadingStatus = "not loading";
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.booksLoadingStatus = "error";
      })
      .addDefaultCase(() => {});
  },
});

const { reducer, actions } = booksSlice;

export default reducer;
