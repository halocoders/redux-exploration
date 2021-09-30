import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export const Category = ({ setStatus }) => {
  const [isActiveAll, setIsActiveAll] = useState(false);
  const [isActiveImp, setIsActiveImp] = useState(false);
  const [isActivePersonal, setIsActivePersonal] = useState(false);
  const [isActiveWork, setIsActiveWork] = useState(false);
  const statusHandler = (e) => {
    setStatus(e);
  };
  const handleAll = () => {
    setIsActiveAll(true);
    setIsActiveImp(false);
    setIsActivePersonal(false);
    setIsActiveWork(false);
  };
  const handleImp = () => {
    setIsActiveAll(false);
    setIsActiveImp(true);
    setIsActivePersonal(false);
    setIsActiveWork(false);
  };
  const handlePersonal = () => {
    setIsActiveAll(false);
    setIsActiveImp(false);
    setIsActivePersonal(true);
    setIsActiveWork(false);
  };
  const handleWork = () => {
    setIsActiveAll(false);
    setIsActiveImp(false);
    setIsActivePersonal(false);
    setIsActiveWork(true);
  };
  return (
    <section className="w-2/6 category">
      <ul className="py-9 px-6 rounded-3xl" style={{ background: '#10355A' }}>
        <li
          className={`all flex items-center gap-3 py-3 px-5 rounded-lg mb-2 transition-all ${
            isActiveAll === true ? 'active' : ''
          }`}
        >
          <div className="h-4 w-4 rounded box"></div>
          <button
            value="all"
            className="text-lg tracking-wide text-white"
            onClick={(e) => {
              statusHandler(e.target.value);
              handleAll();
            }}
          >
            All
          </button>
        </li>
        <li
          className={`important flex items-center gap-3 py-3 px-5 rounded-lg mb-2 transition-all ${
            isActiveImp === true ? 'active' : ''
          }`}
        >
          <div className="h-4 w-4 rounded box"></div>
          <button
            value="important"
            className="text-lg tracking-wide text-white"
            onClick={(e) => {
              statusHandler(e.target.value);
              handleImp();
            }}
          >
            Puenting
          </button>
        </li>
        <li
          className={`personal flex items-center gap-3 py-3 px-5 rounded-lg mb-2 transition-all ${
            isActivePersonal === true ? 'active' : ''
          }`}
        >
          <div className="h-4 w-4 rounded box"></div>
          <button
            value="personal"
            className="text-lg tracking-wide text-white"
            onClick={(e) => {
              statusHandler(e.target.value);
              handlePersonal();
            }}
          >
            Personal
          </button>
        </li>
        <li
          className={`work flex items-center gap-3 py-3 px-5 rounded-lg mb-2 transition-all ${
            isActiveWork === true ? 'active' : ''
          }`}
        >
          <div className="h-4 w-4 rounded box"></div>
          <button
            value="work"
            className="text-lg tracking-wide text-white"
            onClick={(e) => {
              statusHandler(e.target.value);
              handleWork();
            }}
          >
            Work
          </button>
        </li>
      </ul>
    </section>
  );
};
