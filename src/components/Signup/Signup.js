import React from "react";

import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";

import { useFormik } from "formik";
import { signupUser } from "../../actions";

const Signup = (props) => {
  const { isAuthenticated, signupError, dispatch } = props;
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirm: "",
    },
    onSubmit: (values) => {
      // confirm password
      const { name, email, password } = values;
      dispatch(signupUser(name, email, password));
      console.log(signupError);
    },
  });
  if (isAuthenticated) {
    return <Redirect to="/" />;
  } else {
    return (
      <div>
        <div>
          <Link to="/login">Sign In</Link>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="email">name</label>
          <input
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.name}
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
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
};

function mapStateToprops(state) {
  return {
    isLoggingIn: state.auth.isLoggingIn,
    loginError: state.auth.loginError,
    isAuthenticated: state.auth.isAuthenticated,
  };
}

export default connect(mapStateToprops)(Signup);
