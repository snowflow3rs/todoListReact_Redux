import { createSlice } from "@reduxjs/toolkit";

export const filterReducer = createSlice({
  name: "filters",
  initialState: {
    search: "",
    status: "All",
    priority: [],
  },
  reducers: {
    searchFilter: (state, action) => {
      state.search = action.payload;
    },
    filterStatus: (state, action) => {
      state.status = action.payload;
    },
    filterPriority: (state, action) => {
      state.priority = action.payload;
    },
  },
});
