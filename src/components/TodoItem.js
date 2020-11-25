import React from "react";

function TodoItem({ title, todoitem, todos, setTodos, setTodotitle, setEditTrue }) {
  /*const { title, id } = todo;*/
  //console.log(todoitem.id);

/* Handle the ToDos */
/* Delete a Todo */
/* filter array creates array that contains all elements that match the condition */
const deleteHandler = ()=>{
  setTodos(todos.filter((filterelement) => filterelement.id !== todoitem.id))
}

/* Strike a ToDo that is done */
/* map array for matching ids, return object props with spread operator and only change property done to the opposite value */
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

/* Edit a ToDo */
/* Identify editingItem by ID, setTodotitle back, so it shows in Inputfield. Set AppState Edit to true, so button changes to ändern
 and has different functionality than just submit */
const editHandler = ()=>{
  console.log(todoitem.id)
  const editingItem = todos.find(item => item.id === todoitem.id)
  console.log(editingItem)
  setTodotitle(editingItem.title)
  setEditTrue(todoitem.id)

}


  return (
    <div className='todoitem'>
      <p className={`item-title  ${todoitem.done ? "done" : ""}` }>{title}</p>
      <div>
        <button onClick={doneHandler}>Done</button>
        <button onClick={editHandler}>Edit</button>
        <button onClick={deleteHandler}>Delete</button>
      </div>
    </div>
  );
}

export default TodoItem;
