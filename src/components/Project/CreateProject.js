import React, { useState } from 'react';
import { useFormik } from 'formik';
import { connect } from 'react-redux';

import { addProject } from '../../actions';
import Navbar from '../Navbar/Navbar';
import TopNav from '../Navbar/TopNav';

import '../../styles/Container.scss';
import '../../styles/Form.scss';

const BUTTONS = [
  { title: 'business services', id: 'business' },
  { title: 'information technology', id: 'information' },
  { title: 'manufaturing', id: 'manufacturing' },
  { title: 'finance', id: 'finance' },
  { title: 'retail', id: 'retail' },
  { title: 'accounting and legal', id: 'accounting' },
  { title: 'construction and maintenance', id: 'construction' },
  { title: 'media', id: 'media' },
  { title: 'hospitality', id: 'hospitality' },
  { title: 'other', id: 'other' }
];

const CreateProject = (props) => {
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
      skill: [],
      duration: '',
      location: '',
      remote: false
    },
    onSubmit: (values) => {
      values.category = state.values;
      const skills = values.skill.split(',');
      values.skill = [...skills];
      dispatch(addProject(values));
    }
  });
  return (
    <div className="container">
      <Navbar />
      <TopNav />
      <div className="content">
        <div className="form">
          <form onSubmit={formik.handleSubmit}>
            <div className="fields">
              <label htmlFor="title">Title</label>
              <input
                id="title"
                name="title"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.title}
                required
              />
            </div>
            <div className="fields">
              <label htmlFor="des">Description</label>
              <textarea
                id="des"
                name="des"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.des}
                maxLength="2000"
              />
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
              <div className="tooltip">
                <span></span>
              </div>
              <label htmlFor="skill">Skills</label>
              <input
                id="skill"
                name="skill"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.skill}
                maxLength="150"
                required
              />
            </div>
            <div className="fields">
              <label htmlFor="duration">Duration in weeks</label>
              <input
                id="duration"
                name="duration"
                type="number"
                onChange={formik.handleChange}
                value={formik.values.duration}
                required
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

function mapStateToprops(state) {
  return {
    isAddingProject: state.auth.isAddingProject,
    addingProjectError: state.auth.addingProjectError,
    error: state.auth.error
  };
}

export default connect(mapStateToprops)(CreateProject);
