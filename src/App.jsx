import React from "react";
import "./App.css";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function App() {
  return (
    <div className="App">
      <h1>To-Do List</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
