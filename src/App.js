import React, { useState, useEffect } from "react";
import "./App.css";
import List from "./List";

const App = () => {
  const [todoInputData, setTodoInputData] = useState();
  const [todos, setTodos] = useState([]);

  const handleTodoInputText = e => {
    setTodoInputData(e.target.value);
  };

  const addTodo = e => {
    e.preventDefault();
    setTodos([...todos, todoInputData]);
  };

  useEffect(() => {
    console.log("USE EFFECT - REACT HOOKS");
  }, [todos]);

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
