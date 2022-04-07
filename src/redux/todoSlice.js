import { createSlice } from "@reduxjs/toolkit";

const intialValue = {
  data: [],
};
export const todoSlice = createSlice({
  name: "input",
  initialState: intialValue,
  reducers: {
    TODO_ADD: (state, action) => {
      state.data = [...state.data, action.payload];
    },
    TODO_COMPLETED: (state, action) => {
      console.log(action);
      console.log(state);
      let temp = [...state.data];
      temp[action.payload].completed = !temp[action.payload].completed;
      state.data = temp;
    },
    TODO_DELETE: (state, action) => {
      state.data = state.data.filter((val) => val.id !== action.payload);
    },
  },
});
export const { TODO_ADD, TODO_COMPLETED, TODO_DELETE } = todoSlice.actions;
export default todoSlice.reducer;
