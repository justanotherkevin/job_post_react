import React, { Component } from 'react';

class AllJobs extends Component {
  render() {
    const { allJobs } = this.props
    const eachJob = allJobs.map(( job, index ) =>
      <div className="one_job" key={job.id} >
        <h3>{job.title}</h3>
        <p>{job.body}</p>
      </div>
    )
    return (
      <div >
        <p>this is the All job compon </p>
        {eachJob}
      </div>
    )
  };
};
export default AllJobs
