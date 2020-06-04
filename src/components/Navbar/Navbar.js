import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

  return (
    <div className="side-nav">
      <div className="bar">
        icons
      </div>
      <div className="home">
        <NavLink exact to="/app" className="nav-link" activeClassName="nav-active">
          Skillmatcher
        </NavLink>
      </div>
      <div>
        <NavLink exact to="/listing" className="nav-link" activeClassName="nav-active">
          Job Listing
        </NavLink>
      </div>
      <div>
        <NavLink exact to="/project" className="nav-link" activeClassName="nav-active">
          Project
        </NavLink>
      </div>
      <div>
        <NavLink exact to="/create-listing" className="nav-link" activeClassName="nav-active">
          Post a job
        </NavLink>
      </div>
      <div>
        <NavLink exact to="/create-project" className="nav-link" activeClassName="nav-active">
          Create a project
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
