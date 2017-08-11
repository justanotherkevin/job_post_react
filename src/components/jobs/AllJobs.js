import React, { Component } from 'react';

class AllJobs extends Component {
  render() {
    const { allJobs } = this.props

    const eachJob = allJobs.map(( job, index ) =>
      <div className="one_job" key={job.id} >
        <h3>{job.title}</h3>
        <p>{job.company_name} - {job.location}</p>
        <p>{job.summary.split(' ').slice(0, 15).join(' ')+"..."}</p>
        <p>Desire skills: {job.skills} </p>
        <p>Posted on: {job.date_created}</p>
      </div>
    )

    return (
      <div className="all_jobs_wrapper">
        <p>this is the All job compon </p>
        {eachJob}
      </div>
    )
  };
};
export default AllJobs
