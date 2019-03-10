import React from "react";
import { TodoContext } from "./App";

const Header = ({ todos }) => {
  return (
    <TodoContext.Consumer>
      {({ todos }) => (
        <>
          <h1>HELLO, TODO APPLICATIONS</h1>
          <div>
            해야할 일은 {todos.filter(v => v.status === "todo").length} 개가
            있습니다
          </div>
        </>
      )}
    </TodoContext.Consumer>
  );
};

export default Header;
