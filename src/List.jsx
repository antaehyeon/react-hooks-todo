import React from "react";

const List = ({ todos, loading }) => {
  const todoList = todos.map((todo, idx) => <li key={idx}>{todo.title}</li>);

  if (loading) return <div>loading ...</div>;

  return <ul>{todoList}</ul>;
};

export default List;
