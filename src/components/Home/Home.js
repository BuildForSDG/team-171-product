import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "../Navbar/Navbar";
import Listing from "../Listing/Listing";
import CreateListing from "../Listing/CreateListing";

import Project from "../Project/Project";
import CreateProject from "../Project/CreateProject";
import Footer from "../Footer/Footer";

const Home = () => {
  return(
    <Router>
      <Navbar />
      <Switch>
        <Route path="/listing" component={Listing} />
        <Route path="/create-list" component={CreateListing} />
        <Route path="/project" component={Project} />
        <Route path="/create-project" component={CreateProject} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default Home;
