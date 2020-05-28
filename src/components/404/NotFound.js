import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="notfound">
      <h1>404 Page Not Found</h1>
      <NavLink to="/app">
        <button>Back to home</button>
      </NavLink>
    </div>
  );
};

export default NotFound;
