import React, { Component } from 'react';
import axios from 'axios';
import NewPost from './NewPost';

class JobInfo extends Component {

  constructor() {
    super();
    this.state = {
      editJob: false,
    }
    this.toggleEditJob = this.toggleEditJob.bind(this);
  }
  // change the component to edit by updating the state
  toggleEditJob() {
    const editJobState = this.state.editJob
    const newJobState = editJobState === false ? true : false;
    this.setState({editJob : newJobState});
  }

  render() {
    const jobInfo = this.props.oneJob;
    const editJob = this.state.editJob;

    return (
      <div className="jobinfo_wrapper" >
        {editJob ? (
          <NewPost jobInfo={jobInfo}/>
        ) : (
          <div className="jobinfo side_div">
            { Object.keys(jobInfo).length > 0 &&
              <div className="jobinfo_details">
                <h3>{jobInfo.title}</h3>
                <p>{jobInfo.company_name} - {jobInfo.location}</p>
                <p>{jobInfo.summary}</p>
                <p>Desire skills: {jobInfo.skills} </p>
                <p>Salary: {jobInfo.salary} </p>
                <h4>Job Type: </h4>
                <h4>Job Location: </h4>
                <h4>Experience Requirement: </h4>
                <p>Posted on: {jobInfo.date_created}</p>
                <svg
                  className="edit_job_icon"
                  onClick={this.toggleEditJob}
                  width="32px"
                  height="32px"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                  <g className="edit_job_icon_color" transform="translate(-517.000000, -102.000000)">
                    <path d="M548.396,106.088 L544.884,102.573 C544.107,101.797 542.85,101.797 542.074,102.573 L538.649,106 L541.459,106 L542.776,104.683 C543.164,104.294 543.793,104.294 544.182,104.683 L546.289,106.791 C546.677,107.18 546.677,107.809 546.289,108.197 L545,109.487 L545,112.298 L548.396,108.899 C549.172,108.124 549.172,106.864 548.396,106.088 L548.396,106.088 Z M528.024,119.444 C528.397,119.817 530.22,121.641 531.536,122.959 L542.776,111.712 L539.239,108.222 L528.024,119.444 L528.024,119.444 Z M523.713,126.571 C523.485,127.029 523.925,127.501 524.414,127.273 L529.786,124.02 L526.965,121.195 L523.713,126.571 L523.713,126.571 Z M531.912,124.874 L523.213,129.177 C522.233,129.632 521.449,128.754 521.81,127.773 L526.11,119.068 C526.184,118.693 526.328,118.329 526.619,118.038 L538.649,106 L519.8,106 C518.254,106 517,107.254 517,108.8 L517,131.2 C517,132.746 518.254,134 519.8,134 L542.2,134 C543.746,134 545,132.746 545,131.2 L545,112.298 L532.941,124.365 C532.651,124.655 532.287,124.801 531.912,124.874 L531.912,124.874 Z M544.182,110.306 L545,109.487 L545,108.8 C545,107.254 543.746,106 542.2,106 L541.459,106 L540.719,106.74 L544.182,110.306 L544.182,110.306 Z" id="Fill-213"></path>
                  </g>
                </svg>
              </div>
            }
          </div>
        )}
    </div>
    )
  }
};
export default JobInfo
