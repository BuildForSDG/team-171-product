import React from 'react';
import Navbar from '../Navbar/Navbar';
import Profile from '../Navbar/Profile';

const Home = () => {
  return (
    <div className="container">
      <Navbar />
      <Profile />
      <div className="content">
        <h2>Homepage</h2>
      </div>
    </div>
  );
};

export default Home;
