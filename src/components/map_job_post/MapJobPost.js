import React, { Component } from 'react';
// import JobInfo    from './jobs/JobInfo';



class MapJobPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: "map"
    };
  };

  render() {
      // <JobInfo jobInfo={ jobInfoData }/>


    return (
      <div className='map_job_post_wrapper'>
        <p>this is the map job and post compon </p>


      </div>
    )
  };
};

export default MapJobPost
