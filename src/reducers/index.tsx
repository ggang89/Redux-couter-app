import { combineReducers } from "redux";
import counter from "./counter";
import todos from "./todos";
import posts from "./posts";

const rootReducer = combineReducers({
  todos,
  counter,
  posts
})

export default rootReducer;

//RootState 타입 생성해서 useSelector의 state type으로 지정
export type RootState = ReturnType<typeof rootReducer>;