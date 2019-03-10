import React from "react";
import "./Item.css";

const Item = ({ todo, dispatch }) => {
  const toggleItem = e => {
    const id = e.target.dataset.id;
    dispatch({ type: "CHANGE_TODO_STATUS", payload: id });
  };

  return (
    <li data-id={todo.id} className={"" + todo.status} onClick={toggleItem}>
      {todo.title}
    </li>
  );
};

export default Item;
