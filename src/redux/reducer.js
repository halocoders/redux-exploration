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
    case types.DELETE_TODO:
      return (state = state.filter((item) => item.id !== action.payload));
    case types.EDIT_TODO:
      // return state.map((item) =>
      //   item.id === action.payload.id
      //     ? Object.assign(item, action.payload)
      //     : item
      // );
      return state.map((item) =>
        item.id === action.payload.id ? { ...item, ...action.payload } : item
      );
    default:
      return state;
  }
};

export default todoReducer;
