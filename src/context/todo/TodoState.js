import React, { useReducer } from "react";
import TodoContext from "./todoContext";
import TodoReducer from "./todoReducer";
import { SET_TODOTITLE, SET_TODOS, SET_EDITTRUE, SET_DARKMODE } from "../types";

const TodoState = (props) => {
  const initialState = {
    todotitle: "",
    todos: [],
    edit: false,
    darkmode: false,
  };

  const [state, dispatch] = useReducer(TodoReducer, initialState);

  // Input
  /* Put input into todotitle-state  */
  const inputChangeHandler = (e) => {
    dispatch({ type: SET_TODOTITLE, payload: e.target.value });
  };

  /* Push new todo into todos array */
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      {
        type: SET_TODOS,
        payload: [
          ...state.todos,
          { title: state.todotitle, done: false, id: Math.random() * 1000 },
        ],
      },
      { type: SET_TODOTITLE, payload: "" }
    );
  };

  // Delete
  const deleteHandler = (todoitem) => {
    dispatch({
      type: SET_TODOS,
      payload: state.todos.filter(
        (filterelement) => filterelement.id !== todoitem.id
      ),
    });
  };

  // Done
  const doneHandler = (todoitem) => {
    dispatch({
      type: SET_TODOS,
      payload: state.todos.map((item) => {
        if (item.id === todoitem.id) {
          return {
            ...item,
            done: !item.done,
          };
        }
        return item;
      }),
    });
  };

  //Edit
  const editHandler = (todoitem) => {
    //setTodos(todos.filter((filterelement) => filterelement.id !== todoitem.id));
    const editingItem = state.todos.find((item) => item.id === todoitem.id);
    dispatch({
      type: SET_TODOTITLE,
      payload: editingItem.title,
    });
    dispatch({ type: SET_EDITTRUE, payload: todoitem.id });
  };

  //Edit Item
  const editItem = (e) => {
    e.preventDefault();
    dispatch({
      type: SET_TODOS,
      payload: state.todos.map((item) => {
        if (item.id === state.edit) {
          return {
            ...item,
            title: state.todotitle,
          };
        }
        return item;
      }),
    });
    dispatch({ type: SET_TODOTITLE, payload: "" });
    dispatch({ type: SET_EDITTRUE, payload: false });
  };
  /* Clear all todos */
  const clearAll = () => {
    dispatch({ type: SET_TODOS, payload: [] });
  };

  // Dark Mode
  const changeTheme = () => {
    dispatch({ type: SET_DARKMODE, payload: !state.darkmode });
  };

  //Local Storage

  const fromLocalStorage = () => {
    if (localStorage.getItem("todos") !== null) {
      let storedTodos = JSON.parse(localStorage.getItem("todos"));
      //setTodos(storedTodos);
      dispatch({ type: SET_TODOS, payload: storedTodos });
      let storedMode = JSON.parse(localStorage.getItem("darkmode"));
      // setDarkmode(storedMode);
      dispatch({ type: SET_DARKMODE, payload: storedMode });
    } else {
      return;
    }
  };

  return (
    <TodoContext.Provider
      value={{
        todotitle: state.todotitle,
        todos: state.todos,
        edit: state.edit,
        darkmode: state.darkmode,
        inputChangeHandler,
        submitHandler,
        clearAll,
        deleteHandler,
        doneHandler,
        editHandler,
        editItem,
        changeTheme,
        fromLocalStorage,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoState;
