import React from "react";
import TodoListe from "./components/TodoListe";
import TodoState from "./context/todo/TodoState";

function App() {
  return (
    <TodoState>
      <TodoListe />
    </TodoState>
  );
}
export default App;
