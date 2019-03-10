import React, { useState, useEffect, useReducer } from "react";
import "./TodoStore.css";
import List from "./List";
import useFetch from "./useFetch";
import Header from "./Header";
import Form from "./Form";

export const TodoContext = React.createContext();

const todoReducer = (todos, { type, payload }) => {
  switch (type) {
    case "ADD_TODO": {
      const newTodoData = {
        id: todos.length + 1,
        title: payload,
        status: "todo"
      };

      return [...todos, newTodoData];
    }

    case "SET_INIT_DATA":
      return payload;

    case "CHANGE_TODO_STATUS":
      return todos.map(todo => {
        if (todo.id !== +payload) return todo;
        if (todo.status === "todo") todo.status = "done";
        else todo.status = "todo";
        return todo;
      });

    default:
      break;
  }
};

const TodoStore = () => {
  const [todos, dispatch] = useReducer(todoReducer, []);

  const setInitData = initData => {
    dispatch({ type: "SET_INIT_DATA", payload: initData });
  };

  const loading = useFetch(setInitData, "http://localhost:8080/todo");

  useEffect(() => {
    console.log("USE EFFECT - REACT HOOKS", todos);
  }, [todos]);

  return (
    <TodoContext.Provider value={{ dispatch, todos, loading }}>
      <Header />
      <Form />
      <List />
    </TodoContext.Provider>
  );
};

export default TodoStore;
