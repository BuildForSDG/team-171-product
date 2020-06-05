import React from 'react';
import Navbar from '../Navbar/Navbar';
import TopNav from '../Navbar/TopNav';

const Home = () => {
  return (
    <div className="container">
      <Navbar />
      <TopNav />
      <div className="content">
        <h2>Homepage</h2>
      </div>
    </div>
  );
};

export default Home;
