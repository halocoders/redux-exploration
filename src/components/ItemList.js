import React from 'react';

export const ItemList = ({ data }) => {
  const stats = {
    important: 'important',
    personal: 'personal',
    work: 'work',
    status: 'status',
  };
  const stathus = stats[data.status];
  return (
    <li
      className={`li-item py-5 px-8 bg-gray-600 flex items-center gap-6 text-lg text-white mb-4 ${stathus}`}
    >
      <div className="box-item w-6 h-6 rounded-lg"></div>
      {data.title}
    </li>
  );
};
