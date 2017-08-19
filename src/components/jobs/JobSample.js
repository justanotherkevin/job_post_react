import React, {Component} from 'react';

class JobSample extends Component {

    constructor(props) {
        super(props);
        this.mountJobInfo = this.mountJobInfo.bind(this)
    };

    mountJobInfo() {
        const {job} = this.props
        this.props.showOneJob(job);
        this.props.setFocusJob(job.id)
    };

    render() {
        const { job, focusJobId } = this.props
        const focusJobClass = focusJobId === job.id ? "active_job" : "nope"
        return (
            <div className={"one_job "+ focusJobClass}>
                <h3 onClick={this.mountJobInfo}>{job.title}</h3>
                <p>{job.company_name}</p>
                <p>{job.summary.split(' ').slice(0, 15).join(' ') + "..."}</p>
                <p className="location_posted_date">
                    <span>{job.location}</span>
                    <span>job type</span>
                    <span>{job.date_created}</span>
                </p>
            </div>
        )
    };
};

export default JobSample
