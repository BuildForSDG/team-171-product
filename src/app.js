import React from "react";

import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import ProtectedRoute from "./components/Protected/ProtectedRoute";
import Landing from "./components/Landing/Landing";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import NotFound from "./components/404/NotFound";
import Listing from "./components/Listing/Listing"
import CreateListing from "./components/Listing/CreateListing";
import Project from "./components/Project/Project";
import CreateProject from "./components/Project/CreateProject";

function App(props) {
  const { isAuthenticated, isVerifying } = props;
  return (
    <Switch>
      <Route exact path="/" component={Landing}/>
      <ProtectedRoute
        exact
        path="/app"
        component={Home}
        isAuthenticated={isAuthenticated}
        isVerifying={isVerifying}
      />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/listing" component={Listing} />
      <Route path="/create-listing" component={CreateListing} />
      <Route path="/project" component={Project} />
      <Route path="/create-project" component={CreateProject} />
      <Route path="*" component={NotFound}/>
    </Switch>
  );
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    isVerifying: state.auth.isVerifying,
  };
}

export default connect(mapStateToProps)(App);
