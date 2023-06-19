import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import { add, remove } from "./store/todoSlice";
import { addPost, removePost } from "./store/postSlice";

export default function App() {
  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state.todos);
  const { posts } = useSelector((state) => state.posts);
  // console.log(todos);
  console.log(posts);
  return (
    <div className="App">
      <h2>TODOS</h2>
      {todos?.map((todo) => (
        <p key={todo.id}>
          {todo.todo}{" "}
          <button onClick={() => dispatch(remove({ id: todo.id }))}>
            delete
          </button>
        </p>
      ))}

      <button
        onClick={() => {
          // addNewTodo;
          dispatch(add({ id: 3, todo: "buy butter" }));
        }}
      >
        ADD TODO
      </button>
      <h2>POSTS</h2>

      {posts.map((post) => (
        <p key={post.id}>
          {post.post}{" "}
          <button onClick={() => dispatch(removePost({ id: post.id }))}>
            delete
          </button>
        </p>
      ))}
      <button
        onClick={() => {
          // addNewPOST;
          dispatch(addPost({ id: 2, post: "going to visit ladakh" }));
        }}
      >
        ADD POST
      </button>
    </div>
  );
}
