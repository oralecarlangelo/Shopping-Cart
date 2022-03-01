import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import shoes from "../../../common/itemsList";

const initialState = {
  isLoading: false,
  page: "",
  tab: "",
  shoes: [
    {
      img: "",
      itemName: "",
      id: 0,
      category: "",
      color: "",
      price: 0,
    },
  ],
};

export const getAllListings = createAsyncThunk(
  "listing/getAllListings",
  async () => {
    return shoes;
  }
);

const listingSlice = createSlice({
  name: "listing",
  initialState,
  reducers: {
    pageChange: (state, action) => {
      state.page = action.payload;
    },
    tabChange: (state, action) => {
      state.tab = action.payload;
    },
  },
  extraReducers: {
    [getAllListings.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getAllListings.fulfilled]: (state, action) => {
      state.shoes = action.payload;
      state.isLoading = false;
    },
    [getAllListings.rejected]: (state, action) => {
      state.isLoading = false;
    },
  },
});

export const { pageChange, tabChange } = listingSlice.actions;
export default listingSlice.reducer;
export const listingSelect = (state) => state.listing;
