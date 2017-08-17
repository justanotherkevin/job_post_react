import React, {Component} from 'react';

class JobSample extends Component {

    constructor(props) {
        super(props);
        this.state = {
            job: []
        };
        this.mountJobInfo = this.mountJobInfo.bind(this)
    };
    componentWillMount() {}
    mountJobInfo() {
        const {job} = this.props
        this.props.showOneJob(job);
    };

    render() {
        const {job} = this.props
        return (
            <div className="one_job">
                <h3 onClick={this.mountJobInfo}>{job.title}</h3>
                <p>{job.company_name}</p>
                <p>{job.summary.split(' ').slice(0, 15).join(' ') + "..."}</p>
                {/* <p>Desire skills: {job.skills}</p> */}
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
