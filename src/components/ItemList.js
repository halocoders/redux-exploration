import React, { useState } from 'react';
import { ItemModal } from './ItemModal';

export const ItemList = ({ data }) => {
  const stats = {
    important: 'important',
    personal: 'personal',
    work: 'work',
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const stathus = stats[data.status];
  return (
    <>
      <li
        className={`cursor-pointer li-item py-5 px-8 flex items-center gap-6 text-lg text-white mb-4 ${stathus}`}
        onClick={handleShow}
      >
        <div className="box-item w-6 h-6 rounded-lg"></div>
        {data.title}
      </li>
      {/* <ItemModal handleClose={handleClose} show={show} /> */}
    </>
  );
};
