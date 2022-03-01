import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  selectedItems: [],
};

export const addSelectedItem = createAsyncThunk(
  "shoppingCart/addSelectedItem",
  async (data) => {
    return data;
  }
);

export const editSelectedItem = createAsyncThunk(
  "shoppingCart/editSelecteditem",
  async ({ id, count }) => {
    return { id, count };
  }
);

export const removeSelectedItem = createAsyncThunk(
  "shoppingCart/removeSelectedItem",
  async (id) => {
    return id;
  }
);

const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState,
  reducers: {
    selectedItemsCleanup: (state) => {
      state.selectedItems = [];
    },
  },
  extraReducers: {
    [addSelectedItem.pending]: (state) => {
      state.isLoading = true;
    },
    [addSelectedItem.fulfilled]: (state, action) => {
      const selectedData = action.payload;
      const isItemInCart = state.selectedItems.find(
        (item) => item.id === selectedData.id
      );

      if (isItemInCart) {
        state.selectedItems = state.selectedItems.map((item) =>
          item.id === selectedData.id
            ? {
                ...item,
                count: item.count + 1,
                totalPrice: item.price * (item.count + 1),
              }
            : item
        );
      } else {
        state.selectedItems.push({
          ...selectedData,
          count: 1,
          totalPrice: selectedData.price,
        });
      }

      state.isLoading = false;
    },
    [addSelectedItem.rejected]: (state, action) => {
      state.isLoading = false;
    },
    [editSelectedItem.pending]: (state) => {
      state.isLoading = true;
    },
    [editSelectedItem.fulfilled]: (state, action) => {
      const editingItem = action.payload;

      state.selectedItems = state.selectedItems.map((item) => {
        if (item.id === editingItem.id) {
          return {
            ...item,
            count: editingItem.count,
            totalPrice: item.price * editingItem.count,
          };
        }
        return item;
      });
      state.isLoading = false;
    },
    [removeSelectedItem.rejected]: (state) => {
      state.isLoading = false;
    },
    [removeSelectedItem.fulfilled]: (state, action) => {
      const id = action.payload;

      state.selectedItems = state.selectedItems.filter(
        (item) => item.id !== id
      );
      state.isLoading = false;
    },
    [removeSelectedItem.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const { selectedItemsCleanup } = shoppingCartSlice.actions;
export default shoppingCartSlice.reducer;
export const shoppingCartSelect = (state) => state.shoppingCart;
