import React from "react";

import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";

import { useFormik } from "formik";
import { signupUser } from "../../actions";
import "../../styles/signup.scss";

const Signup = (props) => {
  const { isAuthenticated, signupError, dispatch } = props;
  const formik = useFormik({
    initialValues: {
      name: "",
      username: "",
      email: "",
      password: "",
      confirm: "",
    },
    onSubmit: (values) => {
      // confirm password
      const { name, username, email, password } = values;
      dispatch(signupUser(name, username, email, password));
      console.log(signupError);
    },
  });
  if (isAuthenticated) {
    return <Redirect to="/app" />;
  } else {
    return (
      <div className="signup">
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
        <div className="signin-link">
          <Link to="/login" className="link" style={{ textDecoration: "none" }}><span>Sign In</span></Link>
        </div>
        <div className="form">
          <div className="form-title">
            <p>Sign up to SkillsMatcher</p>
          </div>
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="name">name</label>
          <input
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          <label htmlFor="username">username</label>
          <input
            id="username"
            name="username"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.username}
          />
          <label htmlFor="email">Email</label>
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
          <label htmlFor="confirm">Confirm password</label>
          <input
            id="confirm"
            name="confirm"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.confirm}
          />
          {signupError && (<p>Incorrect credentials</p>)}
          <button type="submit">Submit</button>
        </form>
        </div>
      </div>
      </div>
    );
  }
};

function mapStateToprops(state) {
  return {
    isSigningUp: state.auth.isSigningUp,
    signupError: state.auth.signupError,
    isAuthenticated: state.auth.isAuthenticated,
  };
}

export default connect(mapStateToprops)(Signup);
