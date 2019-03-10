import React, { useContext } from "react";
import Item from "./Item";
import { TodoContext } from "./TodoStore";

const List = () => {
  const { todos, loading, dispatch } = useContext(TodoContext);

  const todoList = todos.map(todo => (
    <Item key={todo.id} todo={todo} dispatch={dispatch} />
  ));

  if (loading) return <div>loading ...</div>;

  return <ul>{todoList}</ul>;
};

export default List;
