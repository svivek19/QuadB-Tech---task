import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    tasks: [],
  },
  reducers: {
    addTask: (state, action) => {
      const existingTask = state.tasks.find(
        (task) => task.id === action.payload.id
      );
      if (existingTask) {
        existingTask.name = action.payload.name;
      } else {
        state.tasks.push(action.payload);
      }
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
  },
});

export const { addTask, deleteTask } = todoSlice.actions;

export default todoSlice.reducer;
