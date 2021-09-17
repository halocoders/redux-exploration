import * as types from './actionTypes';

const todos = [
  {
    id: 1,
    title: 'Walk to the moon',
    status: 'important',
  },
];

const todoReducer = (state = todos, action) => {
  switch (action.type) {
    case types.ADD_TODO:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default todoReducer;
