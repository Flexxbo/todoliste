import React, { useContext } from "react";
import TodoContext from "../context/todo/todoContext";

function TodoItem({ title, todoitem }) {
  const todoContext = useContext(TodoContext);
  const { deleteHandler, doneHandler, editHandler } = todoContext;

  return (
    <div className='todoitem'>
      <p className={`item-title  ${todoitem.done ? "done" : ""}`}>{title}</p>
      <div className='buttons'>
        <button
          onClick={() => {
            doneHandler(todoitem);
          }}
          className='btn'
        >
          Fertig
        </button>
        <button
          onClick={() => {
            editHandler(todoitem);
          }}
          className='btn'
        >
          Ändern
        </button>
        <button
          onClick={() => {
            deleteHandler(todoitem);
          }}
          className='btn'
        >
          Löschen
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
