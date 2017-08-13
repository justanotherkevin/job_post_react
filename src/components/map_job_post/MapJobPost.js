import React, { Component } from 'react';

import Map from './Map';
import JobInfo from './JobInfo';
import NewPost from './NewPost';

class MapJobPost extends Component {
  // switchcase for 3 components
  notification(show)  {
      switch(show) {
          case 'map':
              return <Map />;
          case 'job_info':
              return <JobInfo oneJob={this.props.mapJobPostData}/>;
          case 'new_post':
              return <NewPost mountApiGetData={this.props.mountApiGetData}/>;
          default:
              return null;
      }
  }

  render() {
    // return the desire component
    return (
      <div className='map_job_post_wrapper'>
        <p>this is the map job and post compon </p>
        {this.notification(this.props.renderType)}
      </div>
    )
  };
};

export default MapJobPost
