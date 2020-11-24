import React from "react";
import TodoItem from "./TodoItem";

function TodoInput() {
  return (
    <div>
      <form>
        <p>Neues ToDo hinzufügen:</p>
        <input type='text' /> <br></br>
        <input type='submit' value='Hinzufügen' />
      </form>
      
    </div>
  );
}

export default TodoInput;
