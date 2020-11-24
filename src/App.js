//import "./App.css";
import TodoItem from "./components/TodoItem";

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <h1>Todo Liste</h1>
        <div className='todoinput'>
          <form>
            <p>Neues ToDo hinzufügen:</p>
            <input type='text' /> <br></br>
            <input type='submit' value='Hinzufügen' />
          </form>
        </div>
        <div className='todoliste'>
          <TodoItem />
          <TodoItem />
          <TodoItem />
          <TodoItem />
          <TodoItem />
          <TodoItem />
          <TodoItem />
          <TodoItem />
          <TodoItem />
          <TodoItem />
          <TodoItem />
          <TodoItem />
          <TodoItem />
          <TodoItem />
          <TodoItem />
        </div>
      </div>
    </div>
  );
}

export default App;
