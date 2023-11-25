import { createSlice } from '@reduxjs/toolkit'

export const customerSlice = createSlice({
  name: 'customer',
  initialState: {
    loggedIn: {},
  },
  reducers: {
    setLoggedInCustomer: (state, action) => {
        state.loggedIn = action.payload
    },
    removeLoggedOutCustomer: (state, action) => {
        state.loggedIn = {}
    }
  },
});

// Action creators are generated for each case reducer function
export const { setLoggedInCustomer, removeLoggedOutCustomer } = customerSlice.actions;

export default customerSlice.reducer;