import React from 'react';
import { useFormik } from 'formik';
import '../../styles/Container.scss';
import Navbar from '../Navbar/Navbar';
import '../../styles/createlisting.scss';
import Profile from '../Navbar/Profile';

const CreateListing = () => {
  const formik = useFormik({
    initialValues: {
      title: '',
      des: '',
      category: '',
      fullTime: '',
      partTime: '',
      location: '',
      remote: ''
    },
    onSubmit: (values) => {
      console.log(values);
      // const { name, username, email, password } = values;
      // dispatch goes here
      // dispatch(signupUser(name, username, email, password));
    }
  });
  return (
    <div className="container">
      <Navbar />
      <Profile />
      <div className="content">
        <div className="form">
          <form onSubmit={formik.handleSubmit}>
            <div>
              <label htmlFor="title">Title</label>
              <input id="title" name="title" type="text" onChange={formik.handleChange} value={formik.values.title} />
            </div>
            <div>
              <label htmlFor="des">Description</label>
              <textarea id="des" name="des" type="text" onChange={formik.handleChange} value={formik.values.des} />
            </div>
            <div>
              <label htmlFor="email">Category</label>
              <input
                id="category"
                name="category"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.category}
              />
            </div>
            <div>
              <label htmlFor="fullTime">Full Time</label>
              <input
                id="fullTime"
                name="fullTime"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.fullTime}
              />
            </div>
            <div>
              <label htmlFor="partTime">Part Time</label>
              <input
                id="partTime"
                name="partTime"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.partTime}
              />
            </div>
            <div>
              <label htmlFor="location">Location</label>
              <input
                id="location"
                name="location"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.location}
              />
            </div>
            <div>
              <label htmlFor="remote">Remote</label>
              <input
                id="remote"
                name="remote"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.remote}
              />
            </div>
            <div>
              <button type="reset" onClick={formik.handleReset}>
                Cancel
              </button>
            </div>
            <div>
              <button type="submit">Confirm</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

// map state to props

export default CreateListing;
