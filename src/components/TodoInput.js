import React, { useContext } from "react";
import TodoContext from "../context/todo/todoContext";

function TodoInput() {
  const todoContext = useContext(TodoContext);

  const {
    todotitle,
    edit,
    inputChangeHandler,
    submitHandler,
    editItem,
  } = todoContext;

  return (
    <div className='todoinput'>
      <form>
        {/* Set value to todotitle to "reset" the input field to be blank */}
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
