import * as types from './actionTypes';

const todos = [
  {
    id: 1,
    title: 'Walk to the moon',
    status: 'important',
  },
];

const todoReducer = (state = todos, action) => {
  let newTodos = [];
  switch (action.type) {
    case types.ADD_TODO:
      return [...state, action.payload];
    case types.DELETE_TODO:
      newTodos = [...state];
      newTodos = newTodos.filter((item) => item.id !== action.payload);
      return newTodos;
    default:
      return state;
  }
};

export default todoReducer;
