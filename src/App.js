import React, { useState, useEffect } from "react";
import "./App.css";
import List from "./List";

const App = () => {
  const [todoInputData, setTodoInputData] = useState();
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleTodoInputText = e => {
    setTodoInputData(e.target.value);
  };

  const addTodo = e => {
    e.preventDefault();
    setTodos([...todos, todoInputData]);
  };

  const fetchInitialData = async () => {
    setLoading(true);
    const response = await fetch("http://localhost:8080/todo");
    const initialData = await response.json();
    setTodos([...todos, ...initialData]);
    setLoading(false);
  };

  useEffect(() => {
    console.log("USE EFFECT - REACT HOOKS", todos);
  }, [todos]);

  useEffect(() => {
    fetchInitialData();
  }, []);

  return (
    <>
      <h1>-TODO APPLICATIONS-</h1>
      <form action="">
        <input type="text" name="" onChange={handleTodoInputText} />
        <button onClick={addTodo}>할일 추가</button>
      </form>

      <List todos={todos} loading={loading} />
    </>
  );
};

export default App;
