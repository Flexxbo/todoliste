import React, { useState } from "react";
import TodoItem from "./components/TodoItem";

function App() {

  /* const todos = [
    { id: 1, title: "Zwiebeln kaufen" },
    { id: 2, title: "Knoblauch kaufen" },
    { id: 3, title: "Nudeln kaufen" },
    { id: 4, title: "Tomaten kaufen" },
  ];*/

  const [todotitle, setTodotitle] = useState("");
  const [todos, setTodos] = useState([]);

  /* Put input into todotitle-state  */
  const inputChangeHandler = (e) => {
    //console.log(e.target.value);
    setTodotitle(e.target.value);
  }

  /* Push new todo into todos array */
  const submitHandler = (e) => {
    e.preventDefault();
  //console.log("nothing reloading if not in form tag")
  setTodos([...todos, {title:todotitle, done:false, id: Math.random()*1000}])
  /* Reset state of input field */
  setTodotitle("")
  //console.log(todos.length)
  }





  return (
    <div className='App'>
      <div className='container'>
        <h1>Todo Liste</h1>
        <div className='todoinput'>
          <div className='form'>
            <form action="">
            <p>Neues ToDo hinzufügen:</p>
            {/* Set value to todotitle to "reset" the input field to be blank */}
            <input value={todotitle} onChange={inputChangeHandler} type='text' />
            <button onClick={submitHandler}>
              Hinzufügen
            </button>
            </form>
          </div>
        </div>
        {/* Map Array to create several todo items - Check if there is items in the array first with ternary */}
        <div className='todoliste'>
          { todos.length > 0 ? todos.map((todoitem) => {
              //console.log(todoitem.id);
              //console.log(todoitem);
              return <TodoItem key={todoitem.id} title={todoitem.title} todoitem={todoitem} todos={todos} setTodos={setTodos} />;
            }) : <p>Nix zu tun?</p> }
        </div>
      </div>
    </div>
  );
}

export default App;
