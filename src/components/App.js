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
      jobHistoryData: [],
      jobInfoData: []
    };
  };

  componentDidMount() {
    const self = this;
    axios.get('http://localhost:3000/job_posts').then(function(response) {
      self.setState( {allJobsData: response.data} );
    }).catch(function(error) {
      self.setState( {allJobsData: jobsData} );
    });

  };

  changeStateJobInfoData = (data) => {
    this.setState({ jobInfoData: data })
  }

  render() {
    // This create const for each state; don't need to always type this.state.(state)
    const { allJobsData, jobHistoryData, jobInfoData} = this.state

    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
          <Search/>
        </div>
        <div className="app_body_wrapper">
          <JobHistory jobHistory={ jobHistoryData }/>
          <AllJobs allJobs={ allJobsData } changeStateJobInfoData={ this.changeStateJobInfoData }/>
          <JobInfo jobInfo={ jobInfoData }/>
        </div>
      </div>
    );
  }
}

export default App;
