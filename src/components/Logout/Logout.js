import React from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions';
import { NavLink } from 'react-router-dom';

const Logout = (props) => {

  const {isLoggingOut, logoutError, error, dispatch } = props;

  const handleLogout = () => {
    dispatch(logoutUser());
  }

  return (
    <div className="logout">
      {isLoggingOut && <NavLink to="/" />}
      {logoutError && <p>{error}</p>}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    isLoggingOut: state.auth.isLoggingOut,
    logoutError: state.auth.logoutError,
    error: state.auth.error
  }
}

export default connect(mapStateToProps)(Logout);
