/* eslint-disable linebreak-style */
import React from 'react';
import { logoutUser } from '../../actions';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import '../../styles/Container.scss';

const Profile = (props) => {
  const { isLoggingOut, logoutError, error, dispatch } = props;
  const handleLogout = () => {
    dispatch(logoutUser());
  };
  return (
    <div className="profile">
      <div>top navigation</div>
      <div className="logout">
        {isLoggingOut && <NavLink to="/" />}
        {logoutError && <p>{error}</p>}
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    isLoggingOut: state.auth.isLoggingOut,
    logoutError: state.auth.logoutError,
    error: state.auth.error
  };
}

export default connect(mapStateToProps)(Profile);
