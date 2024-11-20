import React, { useEffect, useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./reducers";
import { fetchPosts } from "./actions/posts";

type Props = {
  value: any;
  onIncrement: () => void;
  onDecrement: () => void;
};
interface Post{
  userId: number;
  id: number;
  title: string;
}
function App({ value, onIncrement, onDecrement }: Props) {
  const dispatch = useDispatch();

  //rootReducer에서 지정한 type 사용
  const counter = useSelector((state: RootState) => state.counter);
  const todos: string[] = useSelector((state: RootState) => state.todos);

  const posts:Post[]=useSelector((state:RootState)=>state.posts)

  const [todoValue, setTodoValue] = useState("");

  useEffect(() => {
    dispatch(fetchPosts())
    //액션은 객체여야 하는데 함수를 넣어서 오류 발생
    //=>함수를 dispatch해주는 Redux-Thunk 미들웨어 사용해야 함
  },[dispatch])

 

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoValue(e.target.value);
  };
  const addTodo = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch({ type: "ADD_TODO", text: todoValue });
    setTodoValue("");
  };
  return (
    <div>
      <h3>Clicked : {counter} times</h3>
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>

      <form onSubmit={addTodo}>
        <input type="text" value={todoValue} onChange={handleChange} />
        <input type="submit" />
      </form>

      <ul>
        {posts.map((post, index) =><li key={index}>{post.title}</li>
        )}
      </ul>
    </div>
  );
}

export default App;
