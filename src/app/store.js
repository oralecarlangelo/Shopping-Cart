import { configureStore } from "@reduxjs/toolkit";
import shoppingCartReducer from "../components/features/ShoppingCart/shoppingCartSlice";
import listingsReducer from "../components/features/Listings/listingSlice";

export const store = configureStore({
  reducer: {
    shoppingCart: shoppingCartReducer,
    listing: listingsReducer,
  },
});
