import React, { useState } from 'react';
import { Add } from './Add/Add';
import { Category } from './Category';
import { Header } from './Header';
import { List } from './List';

export const Home = () => {
  const [status, setStatus] = useState('all');
  return (
    <div>
      <Header />
      <div className="container mx-auto">
        <Add />
        <div className="max-w-screen-lg mx-auto flex gap-6 mt-16">
          <Category setStatus={setStatus} />
          <List status={status} />
        </div>
      </div>
    </div>
  );
};
