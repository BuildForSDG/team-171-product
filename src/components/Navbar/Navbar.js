import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions';

import DashboardIcon from '@material-ui/icons/Dashboard';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SettingsIcon from '@material-ui/icons/Settings';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import PostAddIcon from '@material-ui/icons/PostAdd';
import WorkIcon from '@material-ui/icons/Work';
import AssignmentIcon from '@material-ui/icons/Assignment';

const Navbar = (props) => {
  const { user, isLoggingOut, dispatch } = props;
  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <div className="side-nav">
      <div className="profile">
        <div className="photo">
          <div className="no-image">{user.photoURL === null && <p>{user.displayName.charAt(0)}</p>}</div>
        </div>
        <div className="name">{user.displayName}</div>
      </div>
      <div className="home">
        <NavLink exact to="/app" className="nav-link" activeClassName="nav-active">
          <DashboardIcon />
          <p>Dashboard</p>
        </NavLink>
      </div>
      <div className="listing">
        <NavLink exact to="/listing" className="nav-link" activeClassName="nav-active">
          <WorkIcon />
          <p>Job Listing</p>
        </NavLink>
      </div>
      <div className="project">
        <NavLink exact to="/project" className="nav-link" activeClassName="nav-active">
          <AssignmentIcon />
          <p>Project</p>
        </NavLink>
      </div>
      <div className="c-listing">
        <NavLink exact to="/create-listing" className="nav-link" activeClassName="nav-active">
          <PostAddIcon />
          <p>Post a job</p>
        </NavLink>
      </div>
      <div className="c-project">
        <NavLink exact to="/create-project" className="nav-link" activeClassName="nav-active">
          <PostAddIcon />
          <p>Post a project</p>
        </NavLink>
      </div>
      <div className="account">
        <NavLink exact to="/account" className="nav-link" activeClassName="nav-active">
          <AccountCircleIcon />
          <p>Account</p>
        </NavLink>
      </div>
      <div className="settings">
        <SettingsIcon />
        <p>Settings</p>
      </div>
      <div className="logout">
        <PowerSettingsNewIcon onClick={handleLogout} />
        <p onClick={handleLogout}>Logout</p>
        {isLoggingOut && <NavLink to="/" />}
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    user: state.auth.user,
    isLoggingOut: state.auth.isLoggingOut,
  };
}

export default connect(mapStateToProps)(Navbar);
