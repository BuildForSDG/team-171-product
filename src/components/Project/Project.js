/* eslint-disable linebreak-style */
import React from "react";
import { Link } from "react-router-dom";

const Project = () => {
  return(
    <div className="project">
      {/* navbar goes here */}
      <div className="search">
        {/* search component goes here */}
      </div>
      <div className="list-view">
        <div className="listing-link">
          <Link to="/listing"><span>Job Listing</span></Link>
        </div>
        <div className="projects-link-disabled">
          <Link to="/project">Freelance projects</Link>
        </div>
        <div className="filter-view">
          Filter:
        </div>
        <div className="list">
          {/* Fetched data goes here */}
          {/* example list item */}
          <div className="list-item">
            <div className="title">
              <h3>{"Project Title"}</h3>
              <p>{"Reprehenderit Lorem officia laborum duis sint consectetur do ea reprehenderit ut consectetur"}</p>
            </div>
            <div className="due">Due: dd/mm/yy</div>
            <div className="category">
              <div className="tag">
                {/* tag icon goes here */}
                <img alt="tag-icon" />
                {/* category name goes here */}
                <p>Category-name</p>
              </div>
              <div className="location">
              {/* locatin-icon goes here */}
              <img alt="location-icon"/>
              {/* The location goes here */}
              <p>Nairobi</p>
              </div>
            </div>
            <div className="proposals">
              <p>Proposals</p>
              <p>{110}</p>
            </div>
            <div className="skill-list">
                {"required skills"}
            </div>
          </div>
        </div>
      </div>
      <div className="skill-view">
        {/* Skills component goes here */}
      </div>
      {/* footer component goes here */}
    </div>
  );
};

// Map state to props here

export default Project;
