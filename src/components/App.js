import React, {Component} from 'react';
import '../styles/App.css';
// import data for testing
import jobsData    from '../data/allJobData';

import Search     from './SearchBar';
import AllJobs    from './jobs/AllJobs';
import JobInfo    from './jobs/JobInfo';
import JobHistory from './jobs/JobHistory';

import axios      from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allJobsData: [],
      jobHistoryData: []
    };
  };

  componentDidMount() {
    const self = this;
    axios.get('http://localhost:3000/job_posts').then(function(response) {
      console.log(response);
      self.setState( {allJobsData: response.data} );
    }).catch(function(error) {
      console.log(error);
      const jobPosts = jobsData;
      self.setState( {allJobsData: jobPosts} );
    });

  };

  render() {
    const { allJobsData, jobHistoryData } = this.state
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
          <Search/>
        </div>
        <div className="app_body_wrapper">
          <JobHistory JobHistory={jobHistoryData}/>
          <AllJobs allJobs={allJobsData}/>
          <JobInfo/>
        </div>
      </div>
    );
  }
}

export default App;
