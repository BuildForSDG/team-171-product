import React from "react";

import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";

import { useFormik } from "formik";
import { loginUser } from "../../actions";
import "../../styles/login.scss";

const Login = (props) => {
  const { isAuthenticated, loginError, dispatch } = props;

  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    onSubmit: values => {
      const { email, password } = values;
      dispatch(loginUser(email, password));
    }
  });

  if (isAuthenticated) {
    return <Redirect to="/app" />;
  } else {
    return (
      <div className="login">
        <div className="cta-section">
          <div className="cta-head">
            <p>Building Your <span>Brand</span></p>
            <p>Made Easy</p>
          </div>
          <div className="cta-des">
            <p>loremAdipisicing deserunt ex consectetur dolor aute excepteur qui et.</p>
          </div>
        </div>
        <div className="form-view">
          <div className="signup-link">
            <p>Don't have an account? <Link to="/signup" className="link" style={{ textDecoration: "none" }}><span>Sign up now</span></Link></p>
          </div>
          <div className="form">
            <div className="form-title">
              <p>Sign in to SkillsMatcher</p>
            </div>
            <form onSubmit={formik.handleSubmit}>
              <label htmlFor="email">Username or Email Address</label>
              <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              <label htmlFor="password">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                onChange={formik.handleChange}
                value={formik.values.password}
              />
              {loginError && (<p>Incorrect email or password</p>)}
              <button type="submit" className="login-btn">Sign In</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
};

function mapStateToprops (state) {
  return {
    isLoggingIn: state.auth.isLoggingIn,
    loginError: state.auth.loginError,
    isAuthenticated: state.auth.isAuthenticated
  };
}

export default connect(mapStateToprops)(Login);
