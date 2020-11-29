import React, { useEffect, useContext } from "react";
import TodoContext from "../context/todo/todoContext";
import Typewriter from "typewriter-effect";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";

function TodoListe() {
  // Initialize Context
  const todoContext = useContext(TodoContext);

  // Destructure context attributes
  const {
    todos,
    edit,
    clearAll,
    darkmode,
    fromLocalStorage,
    changeTheme,
  } = todoContext;

  /* On render, useEffect will get state from localstorage []-runs only once */
  useEffect(() => {
    fromLocalStorage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* Runs everytime todos/darkmode -state changes */
  useEffect(() => {
    //toLocalStorage();
    localStorage.setItem("todos", JSON.stringify(todos));
    localStorage.setItem("darkmode", JSON.stringify(darkmode));
  }, [todos, darkmode]);

  //Push to local storage
  /* const toLocalStorage = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
    localStorage.setItem("darkmode", JSON.stringify(darkmode));
  };*/

  /* Steps */
  // 1. Check for darkmode--> add theme to background div
  // 2. icon with changeTheme() sets darkmode state
  // 3. After TodoInput-Component, check for length of array
  // 3. a)array = 0 --> display typewriter or todolist-items
  // 3. b)array > 0 --> map todos and render TodoItem-components with key, drill todoitem-object down to component
  // 3. c)array > 0 --> display delete all button

  return (
    <div className='background' color-theme={darkmode ? "dark" : "light"}>
      <div className='container'>
        <div id='themechange' onClick={() => changeTheme()}>
          {darkmode ? (
            <i className='fas fa-sun'></i>
          ) : (
            <i className='fas fa-moon'></i>
          )}
        </div>
        <div className='list-container'>
          <header>
            <h1>Felix' Todo Liste</h1>
          </header>
          <TodoInput />
          <div className='todo-list'>
            {todos.length > 0 ? (
              todos.map((todoitem) => {
                return <TodoItem key={todoitem.id} todoitem={todoitem} />;
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
              <button onClick={clearAll} className={!edit ? "btn" : "btn hide"}>
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
