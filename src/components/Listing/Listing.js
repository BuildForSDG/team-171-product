/* eslint-disable linebreak-style */
import React from 'react';
import Navbar from '../Navbar/Navbar';

import '../../styles/Container.scss';
import '../../styles/listing.scss';
import TopNav from '../Navbar/TopNav';
import View from './View';

const Listing = () => {
  return (
    <div className="container">
      <Navbar />
      <div className="content">
        <TopNav />
        <View />
        <div className="search-card">search card</div>
        <div className="skill-card">skill card</div>
      </div>
    </div>
  );
};

export default Listing;