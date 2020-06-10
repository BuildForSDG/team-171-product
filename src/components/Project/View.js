import React from 'react';
import { connect } from 'react-redux';
import '../../styles/View.scss';
import LabelIcon from '@material-ui/icons/Label';

const View = (props) => {
  const { project, isFetchingProject } = props;

  const dueDate = (time) => {
    // const today = new Date().toLocaleString("en-US", {year: "numeric", month: "numeric", day: 'numeric'});
    // const dueYear = time.toLocaleString("en-US", {year: "numeric"});
    const dueMonth = time.toLocaleString("en-US", {month: "long"});
    const dueDay = time.toLocaleString("en-US", {day: "numeric"});
    return (`${dueDay}/${dueMonth}`);
  };

  return (
    <div className="view-card">
      {isFetchingProject === false &&
        Object.entries(project.project)
          .slice(0, 20)
          .map((item, index) => (
            <div id={item[1].title} key={index} className="job">
              <div className="title">{item[1].title}</div>
              <div className="duration">{ dueDate(new Date(parseInt(item[1].duration))) }</div>
              <div className="des">{item[1].des}</div>
              <div className="category">
                <LabelIcon className="icon"/>
                {item[1].category}
                </div>
              <div className="skills">
                {item[1].skills}
                </div>
            </div>
          ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  project: state.auth.project,
  isFetchingProject: state.auth.isFetchingProject
});

export default connect(mapStateToProps)(View);
