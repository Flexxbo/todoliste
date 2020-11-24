import React from "react";

function TodoItem({ title }) {
  /*const { title, id } = todo;*/
  console.log("das ist der consolellog", title);

  return (
    <div className='todoitem'>
      <p>{title}</p>
      <div>
        <button>Done</button>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </div>
  );
}

export default TodoItem;
