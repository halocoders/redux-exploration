import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/action';

export const Add = () => {
  const [state, setstate] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addTodo(state));
    setstate('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex mt-14 max-w-screen-lg mx-auto gap-6"
    >
      <input
        type="text"
        className="text-xl py-4 px-9 font-normal rounded-full focus:outline-none w-10/12 shadow-lg"
        placeholder="Add your todo..."
        value={state}
        onChange={(e) => setstate(e.target.value)}
      />
      <button
        type="submit"
        className="text-xl py-4 px-9 font-normal text-white rounded-full shadow-lg"
        style={{ backgroundColor: '#007FFF' }}
      >
        Add
      </button>
    </form>
  );
};
