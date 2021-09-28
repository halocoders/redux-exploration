import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTodo } from '../../redux/action';

import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

export const ItemEdit = ({ handleClose, open, data }) => {
  const [title, setTitle] = useState(data.title);
  const [status, setStatus] = useState(data.status);

  const handleStatus = (event) => {
    setStatus(event.target.value);
  };

  const dispatch = useDispatch();

  const handleEdit = () => {
    dispatch(
      editTodo({
        id: data.id,
        title: title,
        status: status,
      })
    );

    handleClose();
  };
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <Box sx={style}>
          <Typography id="transition-modal-title" variant="h6" component="h2">
            Lets edit your todo!
          </Typography>
          <TextField
            id="standard-basic"
            label="Todo title"
            defaultValue={data.title}
            onChange={(e) => setTitle(e.target.value)}
            variant="standard"
            sx={{ position: 'relative !important', left: 0, marginTop: '18px' }}
          />
          <FormControl
            sx={{ m: 1, minWidth: 120, marginTop: '24px', right: '40px' }}
          >
            <InputLabel id="demo-simple-select-helper-label">Status</InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={status}
              label="None"
              onChange={handleStatus}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="important">Puenting</MenuItem>
              <MenuItem value="personal">Personal</MenuItem>
              <MenuItem value="work">Work</MenuItem>
            </Select>
          </FormControl>
          <div className="mt-6">
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleEdit}>Edit</Button>
          </div>
        </Box>
      </Fade>
    </Modal>
  );
};
