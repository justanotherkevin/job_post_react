import React, {Component} from 'react';
import JobSample from './JobSample';

class AllJobs extends Component {
    constructor() {
        super();
        this.state = {
            focusJob: ""
        };
        this.setFocusJob = this.setFocusJob.bind(this);
    };

    setFocusJob(job_id) {
        this.setState( {focusJob: job_id} );
    };

    render() {
        // better for performance if it was not set in variable first
        // const eachJob = this.props.allJobs.map(( job, index ) =>
        //   <JobSample key={ job.id } job={ job } changeStateJobInfoData={ this.props.changeStateJobInfoData }/>
        // )
        const focus_job = this.state.focusJob
        return (
            <div className="all_jobs_wrapper">
                <div className="scroll_wrapper">

                    {this.props.allJobs.map((job, index) =>
                        <JobSample
                            key={job.id}
                            job={job}
                            showOneJob={this.props.showOneJob}
                            setFocusJob={this.setFocusJob}
                            focusJob={focus_job}
                        />
                    )}
                </div>
            </div>
        )
    };
};

export default AllJobs
