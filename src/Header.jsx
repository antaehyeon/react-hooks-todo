import React from "react";

const Header = ({ todos }) => {
  return (
    <div>
      <h1>HELLO, TODO APPLICATIONS</h1>
      <div>해야할 일은 {todos.length} 개가 있습니다</div>
    </div>
  );
};

export default Header;
