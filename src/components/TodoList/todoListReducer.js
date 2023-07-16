import { createSlice } from "@reduxjs/toolkit";

export const todoListReducer = createSlice({
  name: "todoList",
  initialState: [
    {
      id: 1,
      name: "test 1",
      priority: "Medium",
      completed: false,
    },
    {
      id: 2,
      name: "avcs 1",
      priority: "Medium",
      completed: true,
    },
    {
      id: 3,
      name: "ldds 1",
      priority: "Medium",
      completed: false,
    },
  ],
  reducers: {
    addToDo: (state, action) => {
      state.push(action.payload);
    },
  },
});
