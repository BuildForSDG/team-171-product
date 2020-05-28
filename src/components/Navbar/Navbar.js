/* eslint-disable linebreak-style */
import React from 'react';
import { logoutUser } from '../../actions';
import { connect } from 'react-redux';
import '../../styles/navbar.scss';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
  const { isLoggingOut, logoutError, error, dispatch } = props;
  const handleLogout = () => {
    dispatch(logoutUser());
  };
  return (
    <div className="navbar">
      <div className="logo">
        <NavLink to="/app">Skillmatcher</NavLink>
      </div>
      <div className="Account">Account</div>
      <div className="for-work">
        <div className="job-listing">
          <NavLink to="/listing">Job Listing</NavLink>
        </div>
        <div className="projects">
          <NavLink to="/project">Project</NavLink>
        </div>
      </div>
      <div className="hire-talent">
        <div className="create-job">
          <NavLink to="/create-listing">Post a job</NavLink>
        </div>
        <div className="create-project">
          <NavLink to="/create-project">Create a project</NavLink>
        </div>
        <div className="search-talent">
          <p>Search Talent</p>
        </div>
      </div>
      <div className="profile">
        {isLoggingOut && ( <NavLink to="/"/>
        )}
        {logoutError && <p>{error}</p>}
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    isLoggingOut: state.auth.isLoggingOut,
    logoutError: state.auth.logoutError
  };
}

export default connect(mapStateToProps)(Navbar);
