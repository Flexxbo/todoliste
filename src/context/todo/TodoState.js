import React, { useReducer } from "react";
import TodoContext from "./todoContext";
import TodoReducer from "./todoReducer";
import { SET_TODOTITLE, SET_TODOS, SET_EDITTRUE, SET_DARKMODE } from "../types";

/* TodoState contains all functions that change state and makes them accessible in all components that are wrapped by TodoState
    in this case App-component in App.js */

const TodoState = (props) => {
  // Initial State (default values), will be filled by localstorage if available

  const initialState = {
    todotitle: "",
    todos: [],
    edit: false,
    darkmode: false,
  };

  // useReducer Hook
  const [state, dispatch] = useReducer(TodoReducer, initialState);

  // Input
  /* Put input into todotitle-state  */
  const inputChangeHandler = (e) => {
    dispatch({ type: SET_TODOTITLE, payload: e.target.value });
  };

  //Input Submit
  /* Push new todo into todos-array, give done default false and create ID with Math random */
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
  /* Filter todos array for id */
  const deleteHandler = (todoitem) => {
    dispatch({
      type: SET_TODOS,
      payload: state.todos.filter(
        (filterelement) => filterelement.id !== todoitem.id
      ),
    });
  };

  // Done
  /* Map todos and check for id, where id matches set done-state to opposite done/undone */
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
  /* 1. Find matching item by id in todos array --> declare as new variable
     2. set todotitle to editingitem.title to put it back into the input field
     3. set edit to "true"/todoitem.id so buttons disappear and Hinzufügen --> Ändern */
  const editHandler = (todoitem) => {
    const editingItem = state.todos.find((item) => item.id === todoitem.id);
    dispatch({
      type: SET_TODOTITLE,
      payload: editingItem.title,
    });
    dispatch({ type: SET_EDITTRUE, payload: todoitem.id });
  };

  //Edit Item
  /* prevent from reloading
     -- the item title to be edited is now in the input field and can be edited
     1. map todos to find the todoitem which is the one beeing edited (state.edit is the id of todoitem) and set new title-state
     2. set todo title back to "" so input field is empty
     3. set edit back to true */
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

  // Clear all
  /* Clear all todos by setting todos to empty array*/
  const clearAll = () => {
    dispatch({ type: SET_TODOS, payload: [] });
  };

  // Dark Mode
  /* set darkmode boolean to opposite value - true/false */
  const changeTheme = () => {
    dispatch({ type: SET_DARKMODE, payload: !state.darkmode });
  };

  //Local Storage
  /* get values from localstorage if available and set todos and darkmode || runs in UseEffect on first mount */
  const fromLocalStorage = () => {
    if (localStorage.getItem("todos") !== null) {
      let storedTodos = JSON.parse(localStorage.getItem("todos"));
      dispatch({ type: SET_TODOS, payload: storedTodos });
      let storedMode = JSON.parse(localStorage.getItem("darkmode"));
      dispatch({ type: SET_DARKMODE, payload: storedMode });
    } else {
      return;
    }
  };

  //TodoContext.Provider
  /* All states and functions in contextprovider will be available in components wrapped by TodoContext */

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
