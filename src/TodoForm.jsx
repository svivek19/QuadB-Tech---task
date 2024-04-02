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
    <div className="w-11/12 md:w-full mx-auto">
      <h1 className="text-center text-white text-2xl mb-10 font-semibold">
        To-Do App
      </h1>
      <form onSubmit={handleSubmit} className="space-x-2">
        <input
          type="text"
          placeholder="Add new task"
          className="bg-gray-600 py-3 px-6 rounded-md font-semibold text-lg outline-none text-white capitalize"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <button
          type="submit"
          className="bg-sky-600 my-3 md:my-0 py-3 px-5 font-semibold hover:bg-sky-700 transition-all text-white rounded-md"
        >
          Add Task
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
