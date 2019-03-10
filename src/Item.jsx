import React from "react";
import "./Item.css";

const Item = ({ todo, changeTodoStatus }) => {
  const toggleItem = e => {
    const id = e.target.dataset.id;
    changeTodoStatus(id);
  };

  return (
    <li data-id={todo.id} className={"" + todo.status} onClick={toggleItem}>
      {todo.title}
    </li>
  );
};

export default Item;
