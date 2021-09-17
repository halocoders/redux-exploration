import React from 'react';
import { useSelector } from 'react-redux';

export const List = () => {
  const todos = useSelector((state) => state.todos);

  return (
    <div className="w-4/6">
      <ul>
        {todos.map((e) => {
          return (
            <li
              key={e.id}
              className={`li-item py-5 px-8 bg-gray-600 flex items-center gap-6 text-lg text-white mb-4 ${
                e.status === '' ? '' : 'personal'
              }`}
            >
              <div className="box-item w-6 h-6 rounded-lg"></div>
              {e.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
