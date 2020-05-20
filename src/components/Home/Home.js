import React from "react";
import { connect } from "react-redux";
import { logoutUser } from "../../actions";

const Home = (props) => {
  const { isLoggingOut, logoutError, dispatch } = props; 
  const handleLogout = () => {
    dispatch(logoutUser());
  };
  return(
    <div>
      <h1>You have reached the homepage</h1>
      <p>Any routes here will also be protected</p>
      <button onClick={handleLogout}>Logout</button>
      {isLoggingOut && <p>Logging Out....</p>}
      {logoutError && <p>Error logging out</p>}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    isLoggingOut: state.auth.isLoggingOut,
    logoutError: state.auth.logoutError
  };
}

export default connect (mapStateToProps)(Home);
