import React, { useState } from "react";
import TodoItem from "./components/TodoItem";

function App() {

  const [todotitle, setTodotitle] = useState("");
  const [todos, setTodos] = useState([]);
  /* !!!Notiz an mich: hier nochmal prüfen, ob es nicht eine bessere Möglichkeit gibt, an die ID zu kommen, 
  als setEditTrue ==> todoitem.ID !!! */
  const [edit, setEditTrue] = useState(false);


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

  /* Edit existing Todo */
  /* 1.Map todos for the fit of edit(todoitem.id)
     2.only change the title to the new input from todotitle, use spread operator to keep all other keys 
     3.clear input field and setEditTrue back to false so Button changes back to Hinzufügen*/
  const editItem = (e)=>{
    e.preventDefault();
    //console.log("ändern");
    setTodos(todos.map(item => {
      if (item.id === edit){
        //console.log("edit", edit)
        return{
          ...item, title: todotitle
        }        
      }
      return item
    }));
    setTodotitle("");
    setEditTrue(false)
  }

  /* Clear all todos */
  const clearAll= ()=>{
    setTodos([])
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
            {edit === false ? <button onClick={submitHandler}>
              Hinzufügen
            </button> : <button onClick={editItem}>
              Ändern
            </button>}
            {/* <button className="display" onClick={submitHandler}>
              Hinzufügen
            </button>
            <button className="nodisplay" onClick={console.log("Ändern")}>
              Ändern
            </button> */}
            </form>
          </div>
        </div>
        {/* Map Array to create several todo items - Check if there is items in the array first with ternary */}
        <div className='todoliste'>
          { todos.length > 0 ? todos.map((todoitem) => {
              //console.log(todoitem.id);
              //console.log(todoitem);
              return <TodoItem key={todoitem.id} setEditTrue={setEditTrue} title={todoitem.title} todoitem={todoitem} todos={todos} setTodos={setTodos} setTodotitle={setTodotitle} />;
            })  : <p>Nix zu tun?</p> }
            { todos.length > 0 ? <button onClick={clearAll}>Alle löschen</button>  : <p></p> }
        </div>
      </div>
    </div>
  );
}

export default App;
/* <button>Clear</button> */