/* eslint-disable linebreak-style */
import React from "react";
import { logoutUser } from "../../actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "../../styles/navbar.scss";

const Navbar = (props) => {
  const { isLoggingOut, logoutError, error, dispatch } = props; 
  const handleLogout = () => {
    dispatch(logoutUser());
  };
  return(
    <div className="navbar">
      <div className="logo">
        <p>SkillMatcher</p>
      </div>
      <div className="Account">
        Account
      </div>
      <div className="for-work">
        <div className="job-listing">
          <Link to="/listing" style={{ textDecoration: "none" }} className="job-link"> 
            <span>Job Listing</span>
          </Link>          
        </div>
        <div className="projects">
          <Link to="/project" style={{ textDecoration: "none" }} className="job-link"> 
            <span>Freelance Projects</span>
          </Link>
        </div>
      </div>
      <div className="hire-talent">
        <div className="create-job">
          <Link to="create-list" style={{ textDecoration: "none" }} className="job-link"> 
            <span>List job opening</span>
          </Link>
        </div>
        <div className="create-project">
          <Link to="/create-project" style={{ textDecoration: "none" }} className="job-link"> 
            <span>Post a Project</span>
          </Link>
        </div>
        <div className="search-talent">
          <p>Search Talent</p>
        </div>
      </div>
      <div className="profile">
        {isLoggingOut && <p>Logging Out....</p>}
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

export default connect (mapStateToProps)(Navbar);
