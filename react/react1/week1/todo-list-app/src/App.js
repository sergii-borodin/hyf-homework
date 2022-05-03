
import React from "react";
import "./App.css";
import todoList from "./todoList.json";
import TodoListTitle from "./todoListTitle";
import TodolistItem from "./todoListItem";


function App() {
  return (
    <div className="App">
      <TodoListTitle/>
      {todoList.map((task) => {
        return (
          <TodolistItem key={task.title} title={task.title} deadline={task.deadline} />
        )
      })}
    </div>
  );
}

export default App;
