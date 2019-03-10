import React from "react";
import Item from "./Item";

const List = ({ todos, loading, changeTodoStatus }) => {
  const todoList = todos.map(todo => (
    <Item key={todo.id} todo={todo} changeTodoStatus={changeTodoStatus} />
  ));

  if (loading) return <div>loading ...</div>;

  return <ul>{todoList}</ul>;
};

export default List;
