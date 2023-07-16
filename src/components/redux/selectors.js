import { createSelector } from "@reduxjs/toolkit";

export const selectorTodoList = (state) => state.todoList;

export const selectorSearchTodo = (state) => state.filters.search;
export const selectorFilterStatus = (state) => state.filters.status;
export const selecterPriority = (state) => state.filters.priority;
export const groupSelector = createSelector(
  selectorTodoList,
  selectorSearchTodo,
  selectorFilterStatus,
  selecterPriority,
  (todoList, searchTodo, status, priority) => {
    return todoList.filter((todo) => {
      if (status === "All") {
        return priority.length >= 1
          ? todo.name.includes(searchTodo) && priority.includes(todo.priority)
          : todo.name.includes(searchTodo);
      }
      return (
        todo.name.includes(searchTodo) &&
        (status === "Completed" ? todo.completed : !todo.completed) &&
        (priority.length >= 1 ? priority.includes(todo.priority) : true)
      );
    });
  }
);
