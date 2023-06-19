import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  posts: [{ id: 1, post: "egg hunting with yoshi" }]
};
const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    addPost(state, action) {
      state.posts.push(action.payload);
    },
    removePost(state, action) {
      const id = action.payload.id;
      state.posts = state.posts.filter((item) => item.id !== id);
    }
  }
});

export const { addPost, removePost } = postSlice.actions;
export default postSlice.reducer;
