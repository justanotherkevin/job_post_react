import React, { Component } from 'react';
// import JobInfo    from './jobs/JobInfo';
import Map from './Map';
import JobInfo from './JobInfo';
import NewPost from './NewPost';

class MapJobPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: "map"
    };
  };

  notification(show)  {
      switch(show) {
          case 'map':
              return <Map />;
          case 'job_info':
              return <JobInfo />;
          case 'new_post':
              return <NewPost />;
          default:
              return null;
      }
  }

  render() {

    return (
      <div className='map_job_post_wrapper'>
        <p>this is the map job and post compon </p>
        {this.notification(this.state.show)}

      </div>
    )
  };
};

export default MapJobPost
