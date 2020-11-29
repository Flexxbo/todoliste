import React, { useEffect, useContext } from "react";
import TodoContext from "../context/todo/todoContext";
import Typewriter from "typewriter-effect";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";

function TodoListe() {
  const todoContext = useContext(TodoContext);

  const {
    todos,
    clearAll,
    darkmode,
    fromLocalStorage,
    changeTheme,
  } = todoContext;

  /* On Page Load */
  useEffect(() => {
    fromLocalStorage();
  }, []);

  /* Everytime state changes */
  useEffect(() => {
    toLocalStorage();
  }, [todos, darkmode]);

  const toLocalStorage = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
    localStorage.setItem("darkmode", JSON.stringify(darkmode));
  };

  return (
    <div className='background' data-theme={darkmode ? "dark" : "light"}>
      <div className='container'>
        <div className='themechange'>
          <div onClick={() => changeTheme()}>
            {darkmode ? (
              <i class='fas fa-sun'></i>
            ) : (
              <i class='fas fa-moon'></i>
            )}
          </div>
        </div>
        <div className='app-container'>
          <header>
            <h1>Felix' Todo Liste</h1>
          </header>
          <TodoInput />
          <div className='todoliste'>
            {todos.length > 0 ? (
              todos.map((todoitem) => {
                return (
                  <TodoItem
                    key={todoitem.id}
                    title={todoitem.title}
                    todoitem={todoitem}
                  />
                );
              })
            ) : (
              <div className='typewrite-container'>
                <h4>
                  <Typewriter
                    options={{
                      strings: ["Nix zu tun?", "Es gibt immer was zu tun..."],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </h4>
              </div>
            )}
            {todos.length > 0 ? (
              <button onClick={clearAll} className='btn'>
                Alle löschen
              </button>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoListe;
