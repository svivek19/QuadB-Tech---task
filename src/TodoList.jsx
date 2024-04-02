import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "./slices/todoSlice";

const TodoList = () => {
  const tasks = useSelector((state) => state.todos.tasks);
  const dispatch = useDispatch();

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          {task.name}
          <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
