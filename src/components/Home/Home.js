import React from 'react';
import Navbar from '../Navbar/Navbar';

const Home = () => {
  return (
    <div className="container">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="container">
        <h1>This is the Homepage</h1>
      </div>
    </div>
  );
};

export default Home;
