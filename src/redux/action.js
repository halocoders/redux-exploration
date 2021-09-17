import * as types from './actionTypes';

let countID = 5;
export const addTodo = (todo) => {
  return {
    type: types.ADD_TODO,
    payload: {
      id: ++countID,
      title: todo,
      status: '',
    },
  };
};
