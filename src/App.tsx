import React, { useState } from "react";
import "./App.css";
import { useSelector } from "react-redux";
import { RootState } from "./reducers";

type Props = {
  value: any;
  onIncrement: () => void;
  onDecrement: () => void;
};

function App({ value, onIncrement, onDecrement }: Props) {

  //rootReducer에서 지정한 type 사용
  const counter = useSelector((state:RootState) => state.counter);
  const todos: string[] = useSelector((state: RootState) => state.todos);

  const [todoValue, setTodoValue] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoValue(e.target.value);
  }
  const addTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTodoValue("");
  }
  return (
    <div>
      {/* <h3>Clicked : {value} times</h3> */}
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>

      <form onSubmit={addTodo}>
        <input type="text" value={todoValue} onChange={handleChange}/>
      <input type="submit"/>
      </form>
    </div>
  );
}

export default App;
