import React from 'react';
import { Link } from 'react-router-dom';

export const Category = () => {
  return (
    <section className="w-2/6 category">
      <ul className="py-9 px-6 rounded-3xl" style={{ background: '#10355A' }}>
        <li className="all active flex items-center gap-3 py-3 px-5 rounded-lg mb-2 transition-all">
          <div className="h-4 w-4 rounded box"></div>
          <Link
            to="/"
            className="font-semibold text-lg tracking-wide text-white"
          >
            All
          </Link>
        </li>
        <li className="important active flex items-center gap-3 py-3 px-5 rounded-lg mb-2 transition-all">
          <div className="h-4 w-4 rounded box"></div>
          <Link
            to="/category/important"
            className="font-semibold text-lg tracking-wide text-white"
          >
            Puenting
          </Link>
        </li>
        <li className="personal flex items-center gap-3 py-3 px-5 rounded-lg mb-2 transition-all">
          <div className="h-4 w-4 rounded box"></div>
          <Link to="/" className="text-lg tracking-wide text-white">
            Personal
          </Link>
        </li>
        <li className="work flex items-center gap-3 py-3 px-5 rounded-lg transition-all">
          <div className="h-4 w-4 rounded box"></div>
          <Link to="/" className="text-lg tracking-wide text-white">
            Work
          </Link>
        </li>
      </ul>
    </section>
  );
};
