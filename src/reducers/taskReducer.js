import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: true,
  error: null,
  data: {},
};

const taskReducer = createSlice({
  initialState,
  name: "task",
  reducers: {
    getTasksRequest(state) {
      state.loading = true;
    },
    getTasksSuccess(state, action) {
      state.loading = false;
      state.data = action.payload;
    },
    getTasksFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    createTaskRequest(state) {
      state.loading = true;
    },
    createTaskSuccess(state, action) {
      state.loading = false;
      // state.data = action.payload;
    },
    createTaskFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    updateTaskRequest(state) {
      state.loading = true;
    },
    updateTaskSuccess(state, action) {
      state.loading = false;
      state.data = action.payload;
    },
    updateTaskFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    getTaskRequest(state) {
      state.loading = true;
    },
    getTaskSuccess(state, action) {
      state.loading = false;
      state.data = action.payload;
    },
    getTaskFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
   deleteTaskRequest(state) {
      state.loading = true;
    },
   deleteTaskSuccess(state, action) {
      state.loading = false;
      state.data = action.payload;
    },
   deleteTaskFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    markTaskRequest(state) {
      state.loading = true;
    },
    markTaskSuccess(state, action) {
      state.loading = false;
      state.data = action.payload;
    },
    markTaskFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    generateQuoteRequest(state) {
      state.loading = true;
    },
    generateQuoteSuccess(state, action) {
      state.loading = false;
      state.data = action.payload;
    },
    generateQuoteFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default taskReducer;
export const taskActions = taskReducer.actions;
