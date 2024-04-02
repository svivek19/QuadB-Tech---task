import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask, addTask } from "./slices/todoSlice";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { FaRegSave } from "react-icons/fa";

const TodoList = () => {
  const tasks = useSelector((state) => state.todos.tasks);
  const dispatch = useDispatch();
  const [editTaskId, setEditTaskId] = useState(null);

  const handleEdit = (task) => {
    setEditTaskId(task.id);
  };

  return (
    <ul className="mt-10 bg-slate-600 text-slate-100 font-semibold rounded-md p-4 space-y-3 capitalize">
      {tasks.map((task) => (
        <li key={task.id}>
          {editTaskId === task.id ? (
            <form
              className="flex justify-between"
              onSubmit={(e) => {
                e.preventDefault();
                dispatch(addTask({ id: task.id, name: task.name }));
                setEditTaskId(null);
              }}
            >
              <input
                type="text"
                value={task.name}
                className="bg-gray-300 w-1/2 p-1 text-black rounded-md font-medium text-lg outline-none capitalize"
                onChange={(e) =>
                  dispatch(addTask({ id: task.id, name: e.target.value }))
                }
              />
              <button type="submit">
                <FaRegSave
                  type="submit"
                  className="text-2xl text-sky-500 hover:scale-110"
                />
              </button>
            </form>
          ) : (
            <div className="flex justify-between">
              <div className="mx-3">{task.name}</div>

              <div className="flex text-2xl space-x-4">
                <FaRegEdit
                  onClick={() => handleEdit(task)}
                  className="cursor-pointer text-green-500 hover:scale-110"
                />
                <MdDeleteOutline
                  onClick={() => dispatch(deleteTask(task.id))}
                  className="text-red-500 cursor-pointer hover:scale-110"
                />
              </div>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
