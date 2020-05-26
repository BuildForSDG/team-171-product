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
        {/* logo goes here */}
        <h1>SkillMatcher</h1>
      </div>
      <div className="for-work">
        <div className="job-listing">
          <Link to="/listing" style={{ textDecoration: "none" }} className="job-link"> 
            <p>Job Listing</p>
          </Link>          
        </div>
        <div className="projects">
          <Link to="/project" style={{ textDecoration: "none" }} className="job-link"> 
            <p>Freelance Projects</p>
          </Link>
        </div>
      </div>
      <div className="hire-talent">
        <div className="create-job">
          <Link to="create-list" style={{ textDecoration: "none" }} className="job-link"> 
            <p>List job opening</p>
          </Link>
        </div>
        <div className="create-project">
          <Link to="/create-project" style={{ textDecoration: "none" }} className="job-link"> 
            <p>Post a Project</p>
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
