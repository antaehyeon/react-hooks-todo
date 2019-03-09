import React, { Component, useState } from "react";
import "./App.css";
import List from "./List";

const App = () => {
  const [inputText, setInputText] = useState();
  const [todos, setTodos] = useState([]);

  const handleTodoInputText = e => {
    console.log("todoInputTextHandler e-value", e.target.value);
    setInputText(e.target.value);
  };

  const addTodo = e => {
    e.preventDefault();
    setTodos([...todos, inputText]);
  };

  return (
    <>
      <h1>-TODO APPLICATIONS-</h1>
      <form action="">
        <input type="text" name="" onChange={handleTodoInputText} />
        <button onClick={addTodo}>할일 추가</button>
      </form>

      <List todos={todos} />
    </>
  );
};

export default App;
