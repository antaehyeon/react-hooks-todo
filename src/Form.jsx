import React from "react";

const Form = ({ handleTodoInputText, addTodo }) => {
  return (
    <form action="">
      <input type="text" name="" onChange={handleTodoInputText} />
      <button onClick={addTodo}>할일 추가</button>
    </form>
  );
};

export default Form;
