import React, { useState, useEffect } from "react";
import "./TodoStore.css";
import List from "./List";
import useFetch from "./useFetch";
import Header from "./Header";
import Form from "./Form";

export const TodoContext = React.createContext();

const TodoStore = () => {
  const [todos, setTodos] = useState([]);
  const loading = useFetch(setTodos, "http://localhost:8080/todo");

  const addTodo = newTodo => {
    const newTodoData = {
      id: todos.length + 1,
      title: newTodo,
      status: "todo"
    };

    setTodos([...todos, newTodoData]);
  };

  const changeTodoStatus = id => {
    const updateTodos = todos.map(todo => {
      if (todo.id !== +id) return todo;
      if (todo.status === "todo") todo.status = "done";
      else todo.status = "todo";
      return todo;
    });

    setTodos(updateTodos);
  };

  useEffect(() => {
    console.log("USE EFFECT - REACT HOOKS", todos);
  }, [todos]);

  return (
    <TodoContext.Provider value={{ todos, addTodo, loading, changeTodoStatus }}>
      <Header />
      <Form />
      <List />
    </TodoContext.Provider>
  );
};

export default TodoStore;
