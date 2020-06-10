/* eslint-disable linebreak-style */
import React from 'react';
import Navbar from '../Navbar/Navbar';

import '../../styles/listing.scss';
import TopNav from '../Navbar/TopNav';
import View from './View';
import { NavLink } from 'react-router-dom';

const Listing = () => {
  return (
    <div className="container">
      <Navbar />
      <div className="content">
        <TopNav />
        <div className="link-card">
          <NavLink exact to='/project' className="link-project">Project</NavLink>
          <NavLink exact to='/listing' className="link-listing">Job Listing</NavLink>
        </div>
        <View />
        <div className="search-card">search card</div>
        <div className="skill-card">skill card</div>
      </div>
    </div>
  );
};

export default Listing;