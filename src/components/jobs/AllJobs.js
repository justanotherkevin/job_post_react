import React, { Component } from 'react';
import JobSample from './JobSample';

class AllJobs extends Component {

  render() {
    // better for performance if it was not set in variable first
    // const eachJob = this.props.allJobs.map(( job, index ) =>
    //   <JobSample key={ job.id } job={ job } changeStateJobInfoData={ this.props.changeStateJobInfoData }/>
    // )

    return (
      <div className="all_jobs_wrapper">
        <div className="scroll_wrapper">

          {this.props.allJobs.map(
            ( job, index ) =>
            <JobSample key={ job.id } job={ job } showOneJob={ this.props.showOneJob }/>
          )}
        </div>
      </div>
    )
  };
};

export default AllJobs
