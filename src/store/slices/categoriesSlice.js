import { createSlice } from '@reduxjs/toolkit'

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    selected: '',
  },
  reducers: {
    setSelected: (state, action) => {
      state.selected = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setSelected } = categoriesSlice.actions;

export default categoriesSlice.reducer;