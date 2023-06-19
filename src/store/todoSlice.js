const { createSlice } = require("@reduxjs/toolkit");
const initialState = {
  todos: [
    { id: 1, todo: "buy milk" },
    { id: 2, todo: "buy bread" }
  ]
};
const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    add(state, action) {
      state.todos.push(action.payload);
    },
    remove(state, action) {
      const id = action.payload.id;
      state.todos = state.todos.filter((item) => item.id !== id);
    }
  }
});

export const { add, remove } = todoSlice.actions;
export default todoSlice.reducer;
