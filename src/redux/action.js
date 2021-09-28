import * as types from './actionTypes';

export const addTodo = (todo) => {
  return {
    type: types.ADD_TODO,
    payload: todo,
  };
};

export const deleteTodo = (todoId) => {
  return {
    type: types.DELETE_TODO,
    payload: todoId,
  };
};

export const editTodo = (todo) => {
  return {
    type: types.EDIT_TODO,
    payload: todo,
  };
};
