import React, { useContext } from "react";
import { TodoContext } from "./TodoStore";

const Form = () => {
  const { handleTodoInputText, addTodo } = useContext(TodoContext);

  return (
    <form action="">
      <input type="text" name="" onChange={handleTodoInputText} />
      <button onClick={addTodo}>할일 추가</button>
    </form>
  );
};

export default Form;
