import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  products: [],

  productListLoading: false,
  productListDone: false,
  productListError: null,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    // product list 조회
    productListRequest(state, action) {
      state.productListLoading = true;
      state.productListDone = false;
      state.productListError = null;
    },
    productListSuccess(state, action) {
      state.productListLoading = false;
      state.products = action.payload.data;
      state.productListDone = true;
    },
    productListFailure(state, action) {
      state.productListLoading = false;
      state.productListError = action.payload.error;
    },
    productListReset(state, action) {
      state.productListLoading = false;
      state.productListDone = false;
      state.productListError = null;
    },
  },
});

export const productActions = productSlice.actions;
export default productSlice.reducer;
