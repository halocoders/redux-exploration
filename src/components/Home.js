import React from 'react';
import { Add } from './Add/Add';
import { Category } from './Category';
import { Header } from './Header';
import { List } from './List';

export const Home = () => {
  return (
    <div>
      <Header />
      <div className="container mx-auto">
        <Add />
        <div className="max-w-screen-lg mx-auto flex gap-6 mt-16">
          <Category />
          <List />
        </div>
      </div>
    </div>
  );
};
