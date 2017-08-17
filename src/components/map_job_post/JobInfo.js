import React, { Component } from 'react';
import axios from 'axios';

class JobInfo extends Component {

  constructor() {
    super();
    this.state = {
      editJob: false,
      oneJob: {}
    }
  }
  // need to mount the data for onejob to the state; only once
  componentWillMount() {
    this.state.oneJob = this.props.oneJob;
  }

  editJob() {
    console.log("hello");
    const jobID = this.props.oneJob.id;
    const url = `http://localhost:3000/job_posts/${jobID}`
    debugger
    // axios.put('http://localhost:3000/job_posts/1', oneJob ).then( (res) => {
    //   console.log("res ");
    // }).catch( (err) => {
    //   console.log(err);
    // })
  }



  render() {
    const { jobInfo, editJob }= this.state
    let renderJob = null;
    if (editJob === false ) {
      renderJob =
        <div className="job_info_wrapper side_div">
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
    } else {
      renderJob =
      <div className="job_info_wrapper side_div">
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
    }
    debugger
    return (
      {renderJob}
    )
  };

};
export default JobInfo
