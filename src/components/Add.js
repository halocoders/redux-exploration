import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/action';

import { Select } from 'antd';

export const Add = () => {
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState('status');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      addTodo({
        id: Math.random() * 100,
        title: title,
        status: status,
      })
    );
    setTitle('');
  };

  const { Option } = Select;

  return (
    <form
      onSubmit={handleSubmit}
      className="flex mt-14 max-w-screen-lg mx-auto gap-6"
    >
      <div className="inputan w-10/12 flex relative items-center">
        <Select
          labelInValue
          defaultValue={{ value: `${status}` }}
          className="absolute right-4 bg-transparent text-gray-700
        h-9"
          style={{ width: 120 }}
          onChange={(e) => setStatus(e.value)}
        >
          <Option value="important">Puenting</Option>
          <Option value="personal">Personal</Option>
          <Option value="work">Work</Option>
        </Select>
        ,
        <input
          required
          type="text"
          className="text-xl py-4 pl-9 pr-28 font-normal rounded-full focus:outline-none w-full shadow-lg"
          placeholder="Add your todo..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
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
