import React from 'react';
import { Link } from 'react-router-dom';

export const Category = () => {
  return (
    <section className="w-2/6 category">
      <ul className="py-9 px-6 rounded-3xl" style={{ background: '#10355A' }}>
        <li className="active flex items-center gap-3 py-3 px-5 rounded-lg mb-2 transition-all">
          <div className="h-4 w-4 rounded box"></div>
          <Link className="font-semibold text-lg tracking-wide cursor-default">
            Puenting
          </Link>
        </li>
        <li className="flex items-center gap-3 py-3 px-5 rounded-lg mb-2 transition-all">
          <div className="h-4 w-4 rounded box"></div>
          <Link className="text-lg tracking-wide text-white cursor-default">
            Personal
          </Link>
        </li>
        <li className="flex items-center gap-3 py-3 px-5 rounded-lg transition-all">
          <div className="h-4 w-4 rounded box"></div>
          <Link className="text-lg tracking-wide text-white cursor-default">
            Work
          </Link>
        </li>
      </ul>
    </section>
  );
};
