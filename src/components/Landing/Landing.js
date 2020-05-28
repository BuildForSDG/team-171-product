/* eslint-disable linebreak-style */
import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const Landing = (props) => {
  const { isAuthenticated } = props;

  if (isAuthenticated) {
    return (
      <Redirect
        to={{
          pathname: '/app',
          state: { from: props.location }
        }}
      />
    );
  } else {
    return (
      <div className="landing">
        <h1>This is the landing page</h1>
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="signup">
          <button>Sign up</button>
        </Link>
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated
  };
}

export default connect(mapStateToProps)(Landing);
