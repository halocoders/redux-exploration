import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../redux/action';
import './Add.css';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export const Add = () => {
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState('');

  const handleChange = (event) => {
    setStatus(event.target.value);
  };

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

  return (
    <form
      onSubmit={handleSubmit}
      className="flex mt-14 max-w-screen-lg mx-auto gap-6 justify-center"
    >
      <div className="inputan w-10/12 flex relative items-center">
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-helper-label">Status</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={status}
            label="None"
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="important">Puenting</MenuItem>
            <MenuItem value="personal">Personal</MenuItem>
            <MenuItem value="work">Work</MenuItem>
          </Select>
        </FormControl>
        <input
          required
          type="text"
          className="text-xl py-4 pl-9 pr-36 font-normal rounded-full focus:outline-none w-full shadow-lg"
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
