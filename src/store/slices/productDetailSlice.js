import { createSlice } from '@reduxjs/toolkit'

export const productDetailSlice = createSlice({
  name: 'productDetail',
  initialState: {
    selectedProduct: {} ,
  },
  reducers: {
    setSelectedProduct: (state, action) => {
        state.selectedProduct = action.payload
    },
  },

})

// Action creators are generated for each case reducer function
export const { setSelectedProduct } = productDetailSlice.actions;

export default productDetailSlice.reducer;