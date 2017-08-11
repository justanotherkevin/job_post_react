import React, { Component } from 'react';

class JobInfo extends Component {

  render() {
    const jobInfo = this.props.jobInfo
    return (
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
    )
  };

};
export default JobInfo
