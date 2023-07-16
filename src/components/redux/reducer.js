import { filterReducer } from "../Filters/filterReducer";
import { todoListReducer } from "../TodoList/todoListReducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  filters: filterReducer,
  todoList: todoListReducer,
});
