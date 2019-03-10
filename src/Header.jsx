import React, { useContext } from "react";
import { TodoContext } from "./TodoStore";

const Header = () => {
  const { todos } = useContext(TodoContext);

  return (
    <>
      <h1>HELLO, TODO APPLICATIONS</h1>
      <div>
        해야할 일은 {todos.filter(v => v.status === "todo").length} 개가
        있습니다
      </div>
    </>
  );
};

export default Header;
