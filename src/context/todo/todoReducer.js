/* Reducer sets the states, like useState hook */

import { SET_TODOTITLE, SET_TODOS, SET_EDITTRUE, SET_DARKMODE } from "../types";

const todoReducer = (state, action) => {
  switch (action.type) {
    case SET_TODOTITLE:
      return {
        ...state,
        todotitle: action.payload,
      };
    case SET_TODOS:
      return {
        ...state,
        todos: action.payload,
        todotitle: "",
      };
    case SET_EDITTRUE:
      return {
        ...state,
        edit: action.payload,
      };
    case SET_DARKMODE:
      return {
        ...state,
        darkmode: action.payload,
      };
    default:
      return state;
  }
};

export default todoReducer;
