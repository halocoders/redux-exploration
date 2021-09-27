import React, { useState } from 'react';

import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';

import { ItemDelete } from './ItemDelete';
import { ItemEdit } from './ItemEdit';

export const ItemList = ({ data }) => {
  const stats = {
    important: 'important',
    personal: 'personal',
    work: 'work',
    '': 'no-status',
  };

  const [deleteModal, setDeleteModal] = useState(false);
  const [editModal, setEditModal] = useState(false);

  const stathus = stats[data.status];

  return (
    <>
      <li
        className={`li-item py-5 pl-8 pr-40 flex items-center gap-6 text-lg text-white mb-4 ${stathus} relative`}
      >
        <div>
          <div className="box-item w-6 h-6 rounded-lg"></div>
        </div>
        {data.title}
        <div className="icon-list absolute right-4 flex gap-4">
          <button className="grid place-items-center">
            <ModeEditOutlinedIcon onClick={() => setEditModal(true)} />
          </button>
          <button
            className="grid place-items-center"
            onClick={() => setDeleteModal(true)}
          >
            <DeleteOutlinedIcon />
          </button>
        </div>
      </li>
      <ItemDelete
        handleClose={() => setDeleteModal(false)}
        open={deleteModal}
        data={data}
      />
      <ItemEdit
        handleClose={() => setEditModal(false)}
        open={editModal}
        data={data}
      />
    </>
  );
};
