import * as types from './actionTypes';

const todos = [
  {
    id: 1,
    title: 'Walk to the moon',
    status: 'important',
  },
  {
    id: 2,
    title: 'Sopan lan santun',
    status: '',
  },
];

const todoReducer = (state = todos, action) => {
  let newTodos;
  switch (action.type) {
    case types.ADD_TODO:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default todoReducer;
