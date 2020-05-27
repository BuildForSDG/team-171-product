/* eslint-disable linebreak-style */
import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className="landing">
      <h1>This is the landing page</h1>
      <Link to="/login">
        <button>Login</button>
      </Link>
      <Link to="signup">
        <button>Sign up</button>
      </Link>
    </div>
  );
};

export default Landing;
