import React from "react";

function TodoItem({ title, todoitem, todos, setTodos }) {
  /*const { title, id } = todo;*/
  console.log("das ist der consolellog", title);

/* Handle the ToDos */
/* Delete a Todo */
const deleteHandler = ()=>{
  setTodos(todos.filter((filterelement) => filterelement.id !== todoitem.id))
  console.log("something nice")
}

  return (
    <div className='todoitem'>
      <p>{title}</p>
      <div>
        <button>Done</button>
        <button>Edit</button>
        <button onClick={deleteHandler}>Delete</button>
      </div>
    </div>
  );
}

export default TodoItem;
