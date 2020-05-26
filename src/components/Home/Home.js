import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "../../styles/home.scss";

const Listing = lazy(() => import("../Listing/Listing"));
const CreateListing = lazy(() => import("../Listing/CreateListing"));
const Project = lazy(() => import("../Project/Project"));
const CreateProject = lazy(() => import("../Project/CreateProject"));

const Home = () => {
  return(
    <Router>
      <div className="container">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="dashboard">
          <div className="sticky-nav">
            <div className="search">
              search
            </div>          
            <div className="toggle">toggle</div>
          </div>
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route path="/listing" component={Listing} />
              <Route path="/create-list" component={CreateListing} />
              <Route path="/project" component={Project} />
              <Route path="/create-project" component={CreateProject} />
            </Switch>
          </Suspense>
        </div>
      </div>
    </Router>
  );
};

export default Home;
