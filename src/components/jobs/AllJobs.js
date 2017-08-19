import React, {Component} from 'react';
import JobSample from './JobSample';

class AllJobs extends Component {
    constructor() {
        super();
        this.state = {
            focusJobId: ""
        };
        this.setFocusJob = this.setFocusJob.bind(this);
    };
    // keep job that is last clicked
    setFocusJob(job_id) {
        this.setState( {focusJobId: job_id} );
    };

    render() {
        const { focusJobId } = this.state
        return (
            <div className="all_jobs_wrapper">
                <div className="scroll_wrapper">

                    {this.props.allJobs.map((job, index) =>
                        <JobSample
                            key={job.id}
                            job={job}
                            showOneJob={this.props.showOneJob}
                            setFocusJob={this.setFocusJob}
                            focusJobId={focusJobId}
                        />
                    )}
                </div>
            </div>
        )
    };
};

export default AllJobs
