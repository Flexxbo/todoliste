import React, { useContext } from "react";
import TodoContext from "../context/todo/todoContext";

function TodoInput() {
  // Initialize Context
  const todoContext = useContext(TodoContext);

  // Destructure context attributes
  const {
    todotitle,
    edit,
    inputChangeHandler,
    submitHandler,
    editItem,
  } = todoContext;

  /* Steps */
  // 1. Set value to todotitle to "reset" the input field to be blank or take todotitle if editing
  // 2. If edit --> Show Ändern Button
  // 2. If !edit --> Show Hinzufügen
  // 2. a) if input empty onClick -->alert
  // 2. b) if input not-empty onClick --> submit

  return (
    <div className='todoinput'>
      <form>
        <input
          value={todotitle}
          onChange={inputChangeHandler}
          type='text'
          placeholder='Neues ToDo hinzufügen'
        />
        {edit === false ? (
          <button
            onClick={
              todotitle !== ""
                ? submitHandler
                : (e) => {
                    e.preventDefault();
                    alert("Nix zu tun??? Schreib etwas!");
                  }
            }
            className='btn'
          >
            Hinzufügen
          </button>
        ) : (
          <button onClick={editItem} className='btn'>
            Ändern
          </button>
        )}
      </form>
    </div>
  );
}

export default TodoInput;
