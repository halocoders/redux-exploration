import React from 'react';
import { useDispatch } from 'react-redux';
// import { deleteTodo } from '../redux/action';
import {
  ModalBody,
  Button,
  ModalFooter,
  ModalTitle,
  Modal,
} from 'react-bootstrap';
import ModalHeader from 'react-bootstrap/esm/ModalHeader';

export const ItemModal = ({ handleClose, show }) => {
  const dispatch = useDispatch();
  // const handleDelete = () => {
  //   dispatch(deleteTodo(data.id));
  // };
  return (
    <Modal show={show} onHide={handleClose}>
      <ModalHeader closeButton>
        <ModalTitle>Modal Title</ModalTitle>
      </ModalHeader>
      <ModalBody>Ini body</ModalBody>
      <ModalFooter>
        <Button onClick={handleClose}>Close</Button>
      </ModalFooter>
    </Modal>
  );
};
