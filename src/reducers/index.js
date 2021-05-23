import todosReducer from "../reducers/todos";
import loggedReducer from "..//reducers/isLoggedin";
import { combineReducers } from "redux";

const allReducer = combineReducers({
  todos: todosReducer,
  islogged: loggedReducer,
});

export default allReducer;
