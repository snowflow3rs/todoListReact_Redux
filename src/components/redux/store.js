import { filterReducer } from "../Filters/filterReducer";
import { todoListReducer } from "../TodoList/todoListReducer";

//redux toolkit
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    filters: filterReducer.reducer,
    todoList: todoListReducer.reducer,
  },
});
export default store;
