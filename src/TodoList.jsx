import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask, addTask } from "./slices/todoSlice";

const TodoList = () => {
  const tasks = useSelector((state) => state.todos.tasks);
  const dispatch = useDispatch();
  const [editTaskId, setEditTaskId] = useState(null);

  const handleEdit = (task) => {
    setEditTaskId(task.id);
  };

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          {editTaskId === task.id ? (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                dispatch(addTask({ id: task.id, name: task.name }));
                setEditTaskId(null);
              }}
            >
              <input
                type="text"
                value={task.name}
                onChange={(e) =>
                  dispatch(addTask({ id: task.id, name: e.target.value }))
                }
              />
              <button type="submit">Save</button>
            </form>
          ) : (
            <>
              {task.name}
              <button onClick={() => handleEdit(task)}>Edit</button>
              <button onClick={() => dispatch(deleteTask(task.id))}>
                Delete
              </button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
