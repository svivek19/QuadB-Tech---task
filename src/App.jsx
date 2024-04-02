import React from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function App() {
  return (
    <div className="flex justify-center items-center h-screen bg-slate-800">
      <div className="flex flex-col">
        <TodoForm />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
