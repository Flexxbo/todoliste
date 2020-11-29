import React, { useContext } from "react";
import TodoContext from "../context/todo/todoContext";

function TodoItem({ todoitem }) {
  // Initialize Context
  const todoContext = useContext(TodoContext);

  // Destructure context attributes
  const { deleteHandler, doneHandler, editHandler, edit } = todoContext;

  /* Steps */
  // 1. Give title done or not done class depending on state --> css strikethrough
  // 2. Give buttons hide class, so they can disappear (visibility:hidden) on edit-state but layout does not change

  return (
    <div className='todoitem'>
      <p className={`item-title  ${todoitem.done ? "done" : ""}`}>
        {todoitem.title}
      </p>

      <div className='buttons'>
        <button
          onClick={() => {
            doneHandler(todoitem);
          }}
          className={`
            btn btn-icon btn-check  ${edit ? "hide" : ""}
          `}
        >
          <i className='fas fa-check'></i>
        </button>
        <button
          onClick={() => {
            editHandler(todoitem);
          }}
          className={`
          btn btn-icon btn-edit  ${edit ? "hide" : ""}
        `}
        >
          <i className='fas fa-pen'></i>
        </button>
        <button
          onClick={() => {
            deleteHandler(todoitem);
          }}
          className={`
          btn btn-icon btn-trash  ${edit ? "hide" : ""}
        `}
        >
          <i className='fas fa-trash'></i>
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
