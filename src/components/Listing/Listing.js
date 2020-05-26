/* eslint-disable linebreak-style */
import React from "react";
import { Link } from "react-router-dom";
import "../../styles/listing.scss";

const Listing = () => {
  return(
    <div className="listing">
      <div className="list-view">
        <div className="listing-nav">
          <div>
            <Link to="/listing" style={{ textDecoration: "none" }}><span>Job Listing</span></Link>
          </div>
          <div>
            <Link to="/project" style={{ textDecoration: "none" }}><span>Freelance projects</span></Link>
          </div>
        </div>
        <div className="filter-view">
          <div className="keyword">keyword</div>
          <div className="full-time">
            <label className="switch">
              <input type="checkbox"/>
              <span className="slider"></span>
            </label>
          </div>
          <div className="location">location input</div>
          <div className="category">location input</div>
        </div>
        <div className="list">
          list
        </div>
      </div>
    </div>
  );
};

// Map state to props here

export default Listing;
