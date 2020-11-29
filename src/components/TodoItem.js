import React, { useContext } from "react";
import TodoContext from "../context/todo/todoContext";

function TodoItem({ title, todoitem }) {
  const todoContext = useContext(TodoContext);
  const { deleteHandler, doneHandler, editHandler, edit } = todoContext;

  return (
    <div className='todoitem'>
      <p className={`item-title  ${todoitem.done ? "done" : ""}`}>{title}</p>
      {!edit ? (
        <div className='buttons'>
          <button
            onClick={() => {
              doneHandler(todoitem);
            }}
            className='btn'
          >
            <i className='fas fa-check'></i>
          </button>
          <button
            onClick={() => {
              editHandler(todoitem);
            }}
            className='btn'
          >
            <i className='fas fa-pen'></i>
          </button>
          <button
            onClick={() => {
              deleteHandler(todoitem);
            }}
            className='btn'
          >
            <i className='fas fa-trash'></i>
          </button>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default TodoItem;
