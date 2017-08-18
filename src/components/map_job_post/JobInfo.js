import React, { Component } from 'react';
import axios from 'axios';
import NewPost from './NewPost';

class JobInfo extends Component {

  constructor() {
    super();
    this.state = {
      editJob: false,
      // oneJob: {}
    }
    this.toggleEditJob = this.toggleEditJob.bind(this);
  }
  // need to mount the data for onejob to the state; only once
  componentWillMount() {
    // this.state.oneJob = this.props.oneJob;
  }

  editJob() {

  }

  toggleEditJob() {
    const editJobState = this.state.editJob
    const newJobState = editJobState === false ? true : false;
    this.setState({editJob : newJobState});
  }

  render() {
    const jobInfo = this.props.oneJob;
    const editJob = this.state.editJob;

    return (
      <div>
        {editJob ? (
          <NewPost jobInfo={jobInfo}/>
        ) : (
          <div className="job_info_wrapper side_div">
            <button onClick={this.toggleEditJob}>click me to edit </button>
            { Object.keys(jobInfo).length > 0 &&
              <div>
                <h3>{jobInfo.title}</h3>
                <p>{jobInfo.company_name} - {jobInfo.location}</p>
                <p>{jobInfo.summary}</p>
                <p>Desire skills: {jobInfo.skills} </p>
                <p>Salary: {jobInfo.lower_salary} - {jobInfo.upper_salary}</p>
                <h4>Job Type: </h4>
                <h4>Job Location: </h4>
                <h4>Experience Requirement: </h4>
                <p>Posted on: {jobInfo.date_created}</p>
              </div>
            }
          </div>
        )}
    </div>
    )
  }
};
export default JobInfo
