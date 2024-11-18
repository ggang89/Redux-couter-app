import { combineReducers } from "redux";
import counter from "./couter";
import todos from "./todos";

const rootReducer = combineReducers({
  todos,
  counter
})

export default rootReducer;