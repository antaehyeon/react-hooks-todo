import React, { useEffect, useReducer } from "react";
import "./TodoStore.css";
import List from "./List";
import useFetch from "./useFetch";
import Header from "./Header";
import Form from "./Form";
import todoReducer from "./reducers";

export const TodoContext = React.createContext();

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
