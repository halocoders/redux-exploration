import React from 'react';
import { useSelector } from 'react-redux';
import { ItemList } from './Item/ItemList';

export const List = ({ status }) => {
  const todos = useSelector((state) => state.todos);

  return (
    <div className="w-4/6">
      <ul>
        {todos.length > 0 && status === 'all'
          ? todos.map((e) => <ItemList key={e.id} data={e} />)
          : null}
        {todos.length > 0 && status === 'important'
          ? todos.map(
              (e) =>
                e.status === 'important' && <ItemList key={e.id} data={e} />
            )
          : null}
        {todos.length > 0 && status === 'personal'
          ? todos.map(
              (e) => e.status === 'personal' && <ItemList key={e.id} data={e} />
            )
          : null}
        {todos.length > 0 && status === 'work'
          ? todos.map(
              (e) => e.status === 'work' && <ItemList key={e.id} data={e} />
            )
          : null}
        {/* {todos.map((e) => {
          return <ItemList key={e.id} data={e} />;
        })} */}
      </ul>
    </div>
  );
};
