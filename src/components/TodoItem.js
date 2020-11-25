import React from "react";

function TodoItem({ title, todoitem, todos, setTodos }) {
  /*const { title, id } = todo;*/
  //console.log(todoitem.id);

/* Handle the ToDos */
/* Delete a Todo */
/* filter array creates array that contains all elements that match the condition */
const deleteHandler = ()=>{
  setTodos(todos.filter((filterelement) => filterelement.id !== todoitem.id))
}

const doneHandler = () =>{
  setTodos(todos.map(item => {
    if (item.id === todoitem.id){
      console.log("match")
      return{
        ...item, done: !item.done
      }
    }
    return item
  }))
}

  return (
    <div className='todoitem'>
      <p className={`item-title  ${todoitem.done ? "done" : ""}` }>{title}</p>
      <div>
        <button onClick={doneHandler}>Done</button>
        <button>Edit</button>
        <button onClick={deleteHandler}>Delete</button>
      </div>
    </div>
  );
}

export default TodoItem;
