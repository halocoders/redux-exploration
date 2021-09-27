import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../../redux/action';

import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

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

export const ItemDelete = ({ open, handleClose, data }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTodo(data.id));

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
            Are you sure to delete this todo?
          </Typography>
          <Typography id="transition-modal-description" sx={{ mt: 2 }}>
            {data.title}
          </Typography>
          <div className="mt-6">
            <Button onClick={handleClose}>No</Button>
            <Button onClick={handleDelete}>Yes</Button>
          </div>
        </Box>
      </Fade>
    </Modal>
  );
};
