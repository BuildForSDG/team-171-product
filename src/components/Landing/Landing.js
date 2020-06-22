/* eslint-disable linebreak-style */
import React from 'react';
import { Redirect, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import illustration from '../../Assets/illustration.svg';
import message from '../../Assets/message.svg';
import email from '../../Assets/email.svg';

import '../../styles/Landing.scss';

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
      <div id="landing">
        <div id="logo">SkillMatcher</div>
        <div className="nav-landing">
          <NavLink to="#howitworks" className="link">
            How it works
          </NavLink>
          <NavLink to="#story" className="link">
            Our story
          </NavLink>
          <NavLink to="/login" className="link">
            Sign In
          </NavLink>
        </div>
        <div className="create">
          <NavLink to="/login" id="login">
            Create Account
          </NavLink>
        </div>
        <div id="mantra">
          <div>
            <p>Building Your Brand</p>
            <p>Made Easy</p>
          </div>
          <div id="cta-button">
            <NavLink to="/signup" className="link">
              Find Work
            </NavLink>
            <NavLink to="/signup" className="link">
              Find Talent
            </NavLink>
          </div>
        </div>
        <div id="illustration">
          <img src={illustration} alt="illustration" />
        </div>
        <div id="des">
          <div>
            <p>Find and hire the skilled professionals</p>
            <p> and watch you brand grow.</p>
            <p> We pride ourselves in matching brands,</p>
            <p> big and small with reputable talent</p>
            <p> vetted by our own in-house team.</p>
          </div>
        </div>
        <div id="message">
          <p>message</p>
          <img src={message} alt="send message" />
          <img src={email} alt="send email" />
        </div>
        <div id="copyright">
          <p>&copy; skillMatcher 2020</p>
        </div>
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
