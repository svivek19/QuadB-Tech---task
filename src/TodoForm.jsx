import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { addTask } from "./slices/todoSlice";

const TodoForm = () => {
  const [taskName, setTaskName] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName.trim() === "") return;
    dispatch(addTask({ id: nanoid(), name: taskName }));
    setTaskName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add new task"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TodoForm;
