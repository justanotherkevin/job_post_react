import React, { Component } from 'react';

class JobSample extends Component {

  constructor(props) {
    super(props);
    this.state = {
      job: []
    };
    this.mountJobInfo = this.mountJobInfo.bind(this)
  };
  componentWillMount() {

  }
  mountJobInfo() {
    const { job } = this.props
    this.props.changeStateJobInfoData(job);
  };

  render() {
    const { job } = this.props

    return (
        <div className="one_job">
          <h3 onClick={this.mountJobInfo} >{job.title}</h3>
          <p>{job.company_name} - {job.location}</p>
          <p>{job.summary.split(' ').slice(0, 15).join(' ')+"..."}</p>
          <pral>Desire skills: {job.skills} </pral>
          <pral>Posted on: {job.date_created}</pral>
        </div>
    )
  };
};

export default JobSample