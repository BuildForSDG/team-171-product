import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { fetchJob, userData } from './actions';

import ProtectedRoute from './components/Protected/ProtectedRoute';
import Home from './components/Home/Home';
import Landing from './components/Landing/Landing';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import NotFound from './components/404/NotFound';
import Listing from './components/Listing/Listing';
import CreateListing from './components/Listing/CreateListing';
import Project from './components/Project/Project';
import CreateProject from './components/Project/CreateProject';
import Account from './components/Settings/Account';

function App(props) {
  const { isAuthenticated, isVerifying, dispatch } = props;

  useEffect(() => {
    if (isAuthenticated === true) {
      dispatch(userData());
      dispatch(fetchJob());
    }
  });

  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      <ProtectedRoute exact path="/app" component={Home} isAuthenticated={isAuthenticated} isVerifying={isVerifying} />
      <ProtectedRoute
        exact
        path="/listing"
        component={Listing}
        isAuthenticated={isAuthenticated}
        isVerifying={isVerifying}
      />
      <ProtectedRoute
        exact
        path="/create-listing"
        component={CreateListing}
        isAuthenticated={isAuthenticated}
        isVerifying={isVerifying}
      />
      <ProtectedRoute
        exact
        path="/project"
        component={Project}
        isAuthenticated={isAuthenticated}
        isVerifying={isVerifying}
      />
      <ProtectedRoute
        exact
        path="/create-project"
        component={CreateProject}
        isAuthenticated={isAuthenticated}
        isVerifying={isVerifying}
      />
      <ProtectedRoute
        exact
        path="/account"
        component={Account}
        isAuthenticated={isAuthenticated}
        isVerifying={isVerifying}
      />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  isVerifying: state.auth.isVerifying
});

export default connect(mapStateToProps)(App);
