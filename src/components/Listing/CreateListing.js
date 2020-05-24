import React from "react";
import { useFormik } from "formik";

const CreateListing = () => {
  const formik = useFormik({
    initialValues: {
      title: "",
      des: "",
      category: "",
      fullTime: "",
      partTime: "",
      location: "",
      remote: ""
    },
    onSubmit: (values) => {
      console.log(values)
    // const { name, username, email, password } = values;
    // dispatch goes here
    // dispatch(signupUser(name, username, email, password));
    },
  });
  return (
  <div>
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="title">Title</label>
      <input
        id="title"
        name="title"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.title}
      />
      <label htmlFor="des">Description</label>
      <input
        id="des"
        name="des"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.des}
      />
      <label htmlFor="email">Category</label>
      <input
        id="category"
        name="category"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.category}
       />
      <label htmlFor="fullTime">Full Time</label>
      <input
        id="fullTime"
        name="fullTime"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.fullTime}
      />
      <label htmlFor="partTime">Part Time</label>
      <input
        id="partTime"
        name="partTime"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.partTime}
      />
      <label htmlFor="location">Location</label>
      <input
        id="location"
        name="location"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.location}
      />
      <label htmlFor="remote">Remote</label>
      <input
        id="remote"
        name="remote"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.remote}
      />
      <button type="submit">Submit</button>
      </form>
    </div>
  );
};

// map state to props

export default CreateListing;
