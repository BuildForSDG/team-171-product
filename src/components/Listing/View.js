import React from 'react';
import { connect } from 'react-redux';
import '../../styles/View.scss';
import LabelIcon from '@material-ui/icons/Label';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const View = (props) => {
  const { job, isFetchingJob } = props;  
  const dueDate = (time) => {
    // const today = new Date().toLocaleString("en-US", {year: "numeric", month: "numeric", day: 'numeric'});
    // const dueYear = time.toLocaleString("en-US", {year: "numeric"});
    const dueMonth = time.toLocaleString("en-US", {month: "long"});
    const dueDay = time.toLocaleString("en-US", {day: "numeric"});
    return (`${dueDay}/${dueMonth}`);
  };

  return (
    <div className="view-card">
      {isFetchingJob === false &&
        Object.entries(job.job)
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
              <div className="location">
                <LocationOnIcon className="icon"/>
                {item[1].location}
                </div>
            </div>
          ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  job: state.auth.job,
  isFetchingJob: state.auth.isFetchingJob
});

export default connect(mapStateToProps)(View);
