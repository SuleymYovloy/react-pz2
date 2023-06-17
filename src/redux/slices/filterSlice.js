import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    test: (state) => {
      state.value += 444;
    },
  },
});
// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, test } = filterSlice.actions;

export default filterSlice.reducer;
