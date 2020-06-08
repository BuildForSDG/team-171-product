import React, { useState } from 'react';
import { useFormik } from 'formik';
import { connect } from 'react-redux';

import { addJob } from '../../actions';
import Navbar from '../Navbar/Navbar';
import TopNav from '../Navbar/TopNav';

import '../../styles/Container.scss';

const BUTTONS = [
  { title: 'business services', id: 'business' },
  { title: 'information technology', id: 'information' },
  { title: 'manufacturing', id: 'manufacturing' },
  { title: 'finance', id: 'finance' },
  { title: 'retail', id: 'retail' },
  { title: 'accounting and legal', id: 'accounting' },
  { title: 'construction and maintenance', id: 'construction' },
  { title: 'media', id: 'media' },
  { title: 'hospitality', id: 'hospitality' },
  { title: 'other', id: 'other' }
];

const CreateListing = (props) => {
  const { dispatch } = props;
  const [state, setState] = useState({ values: [] });

  const handleButton = (button) => {
    let tmp = state.values;
    if (state.values.includes(button)) {
      setState({
        values: state.values.filter((el) => el !== button)
      });
    } else {
      tmp.push(button);
      setState({
        values: tmp
      });
    }
  };

  const formik = useFormik({
    initialValues: {
      title: '',
      des: '',
      category: [],
      fulltime: false,
      duration: '',
      location: '',
      remote: false
    },
    onSubmit: (values) => {
      values.category = state.values;
      dispatch(addJob(values));
    }
  });
  return (
    <div className="container">
      <Navbar />
      <div className="content">
        <TopNav />
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
              <label id="label">Category</label>
              {BUTTONS.map((bt) => (
                <div key={bt.id} className="category">
                  <button
                    type="button"
                    id={bt.id}
                    onClick={() => handleButton(bt.id)}
                    className={state.values.includes(bt.id) ? 'buttonPressed' : 'button'}
                  >
                    {bt.title}
                  </button>
                </div>
              ))}
            </div>
            <div className="fields">
              <label htmlFor="fulltime">Full Time</label>
              <input
                id="fulltime"
                name="fulltime"
                type="checkbox"
                onChange={formik.handleChange}
                value={formik.values.fulltime}
              />
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
              <input
                id="remote"
                name="remote"
                type="checkbox"
                onChange={formik.handleChange}
                value={formik.values.remote}
              />
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
    </div>
  );
};

function mapStateToProps(state) {
  return {
    isAddingJob: state.auth.isAddingJob,
    addingJobError: state.auth.addingJobError,
    error: state.auth.error
  };
}

export default connect(mapStateToProps)(CreateListing);
