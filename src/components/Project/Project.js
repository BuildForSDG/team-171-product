/* eslint-disable linebreak-style */
import React from 'react';
import { NavLink } from 'react-router-dom';

import Navbar from '../Navbar/Navbar';
import '../../styles/Container.scss';
import TopNav from '../Navbar/TopNav';
import View from './View';

const Project = () => {
  return (
    <div className="container">
      <Navbar />
      <div className="content">
        <TopNav />
        <div className="link-card">
          <NavLink exact to='/project' className="link-listing">Project</NavLink>
          <NavLink exact to='/listing' className="link-project">Job Listing</NavLink>
        </div>
        <View />
        <div className="search-card">seach-card</div>
        <div className="skill-card">skill-card</div>
      </div>
    </div>
  );
};

// Map state to props here

export default Project;
