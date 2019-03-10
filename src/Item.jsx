import React from "react";

const Item = ({ todo }) => {
  const toggleItem = () => {};

  return (
    <li data-id={todo.id} onClick={toggleItem}>
      {todo.title}
    </li>
  );
};

export default Item;
