import React, { useState } from "react";
import TodoItem from "./components/TodoItem";

function App() {
   const todos = [
    { id: 1, title: "Zwiebeln kaufen" },
    { id: 2, title: "Knoblauch kaufen" },
    { id: 3, title: "Nudeln kaufen" },
    { id: 4, title: "Tomaten kaufen" },
  ];



  return (
    <div className='App'>
      <div className='container'>
        <h1>Todo Liste</h1>
        <div className='todoinput'>
          <div className='form'>
            <p>Neues ToDo hinzufügen:</p>
            {/* <input onChange={inputChangeHandler} type='text' /> */}
            <input  type='text' />
            <button>
              Hinzufügen
            </button>
          </div>
        </div>
        <div className='todoliste'>
          {todos.map((todoitem) => {
              console.log(todoitem.id);
              console.log(todoitem);
              return <TodoItem key={todoitem.id} title={todoitem.title} />;
            })}
        </div>
      </div>
    </div>
  );
}

export default App;
