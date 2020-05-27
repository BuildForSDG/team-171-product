import React from 'react';
import { useFormik } from 'formik';
import '../../styles/createproject.scss';
import Navbar from '../Navbar/Navbar';

const CreateProject = () => {
  const formik = useFormik({
    initialValues: {
      title: '',
      des: '',
      category: [
        'business services',
        'information technology',
        'manufaturing',
        'finance',
        'retail',
        'accounting and legal',
        'construction and maintenance',
        'media',
        'hospitality',
        'other'
      ],
      skill: '',
      duration: '',
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
    <div className="project">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="form">
        <form onSubmit={formik.handleSubmit}>
          <div className="fields">
            <label htmlFor="title">Title</label>
            <input id="title" name="title" type="text" onChange={formik.handleChange} value={formik.values.title} />
          </div>
          <div className="fields">
            <label htmlFor="des">Description</label>
            <textarea id="des" name="des" type="text" onChange={formik.handleChange} value={formik.values.des} />
          </div>
          <div className="fields">
            {/* Categories go here */}
            <div className="category">
              <button type="button">Business Services</button>
            </div>
            <div className="category">
              <button type="button">Other</button>
            </div>
            <div className="category">
              <button type="button">Information and Technology</button>
            </div>
            <div className="category">
              <button type="button">Manufaturing</button>
            </div>
            <div className="category">
              <button type="button">Finance</button>
            </div>
            <div className="category">
              <button type="button">Retail</button>
            </div>
            <div className="category">
              <button type="button">Accounting and Legal</button>
            </div>
            <div className="category">
              <button type="button">Construction and Maintenance</button>
            </div>
            <div className="category">
              <button type="button">Media</button>
            </div>
            <div className="category">
              <button type="button">Hospitality</button>
            </div>
          </div>
          <div className="fields">
            <label htmlFor="skill">Skills</label>
            <input id="skill" name="skill" type="text" onChange={formik.handleChange} value={formik.values.skill} />
          </div>
          <div className="fields">
            <label htmlFor="duration">Duration</label>
            <input
              id="duration"
              name="duration"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.duration}
            />
          </div>
          <div className="fields">
            <label htmlFor="location">Location</label>
            <input
              id="location"
              name="location"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.location}
            />
          </div>
          <div className="fields">
            <label htmlFor="remote">Remote</label>
            <input id="remote" name="remote" type="text" onChange={formik.handleChange} value={formik.values.remote} />
          </div>
          <div className="fields">
            <button type="reset" onClick={formik.handleReset}>
              Cancel
            </button>
          </div>
          <div className="fields">
            <button type="submit">Confirm</button>
          </div>
        </form>
      </div>
    </div>
  );
};

// map state to props

export default CreateProject;
