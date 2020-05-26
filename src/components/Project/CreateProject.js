import React from 'react';
import { useFormik } from 'formik';
import '../../styles/createproject.scss';

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
      fullTime: '',
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
            <label htmlFor="skill">Skills</label>
            <input id="skill" name="skill" type="text" onChange={formik.handleChange} value={formik.values.skill} />
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
            <label htmlFor="duration">Duration</label>
            <input
              id="duration"
              name="duration"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.duration}
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
            <input id="remote" name="remote" type="text" onChange={formik.handleChange} value={formik.values.remote} />
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
  );
};

// map state to props

export default CreateProject;
