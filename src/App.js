import React, { useState, useEffect } from "react";
import "./App.css";
import List from "./List";

const useFetch = (callback, url) => {
  const [loading, setLoading] = useState(false);

  const fetchInitialData = async () => {
    setLoading(true);
    const response = await fetch(url);
    const initialData = await response.json();
    callback(initialData);
    setLoading(false);
  };

  useEffect(() => {
    fetchInitialData();
  }, []);

  return loading;
};

const App = () => {
  const [todoInputData, setTodoInputData] = useState();
  const [todos, setTodos] = useState([]);
  const loading = useFetch(setTodos, "http://localhost:8080/todo");

  const handleTodoInputText = e => {
    setTodoInputData(e.target.value);
  };

  const addTodo = e => {
    e.preventDefault();

    const newTodo = {
      id: todos.length + 1,
      title: todoInputData,
      status: "todo"
    };

    setTodos([...todos, newTodo]);
  };

  useEffect(() => {
    console.log("USE EFFECT - REACT HOOKS", todos);
  }, [todos]);

  useEffect(() => {}, []);

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
