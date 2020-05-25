/* eslint-disable linebreak-style */
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return(
    <div className="Footer">
      <div className="cta">
        <div className="logo">
          {/* logo goes here */}
          <h2>SkillMatcher</h2>
        </div>
        <div className="cta-head">
          <p>Building Your <span>Brand</span></p>
          <p>Made Easy</p>
        </div>
      </div>
      <div className="for-work">
        <p>For Work</p>
        <Link to="/listing"><span>job listing</span></Link>
        <Link to="/project"><span>Freelance Projects</span></Link>
      </div>
      <div className="hire-talent">
        <p>Hire Talent</p>
        <Link to="/create-list"><span>List job opening</span></Link>
        <Link to="/create-project"><span>Post a Project</span></Link>
        <span>Search Talent</span>
      </div>
      <div className="about">
        <p>How it works</p>
        <p>About Us</p>
        <p>Contacts</p>
      </div>
      <div className="social">
        <p>Facebook</p>
        <p>Twitter</p>
        <p>Instagram</p>
      </div>
      <div className="copyright">
        &copy;2020 #BuildForSDG
      </div>
    </div>
  );
};

export default Footer;
