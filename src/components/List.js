import React from 'react';
import { useSelector } from 'react-redux';
import { ItemList } from './Item/ItemList';

export const List = () => {
  const todos = useSelector((state) => state.todos);

  return (
    <div className="w-4/6">
      <ul>
        {todos.map((e) => {
          return <ItemList key={e.id} data={e} />;
        })}
      </ul>
    </div>
  );
};
