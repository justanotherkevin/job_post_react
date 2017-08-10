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
      allJobsData: []
    };
  };

  componentDidMount() {
    // axios.get('http://localhost:3000/job_posts').then(function(response) {
    //   console.log(response);
    // }).catch(function(error) {
    //   console.log(error);
    // });

    const jobPosts = jobsData;
    this.setState( {allJobsData: jobPosts} );
  };

  render() {
    const { allJobsData } = this.state
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
          <Search/>
        </div>
        <div>
          <JobHistory/>
          <AllJobs allJobs={allJobsData}/>
          <JobInfo/>
        </div>
      </div>
    );
  }
}

export default App;
