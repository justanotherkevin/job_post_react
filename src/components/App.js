import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/App.css';
import Search from './SearchBar'
import AllJobs from './jobs/AllJobs'
import JobInfo from './jobs/JobInfo'
import JobHistory from './jobs/JobHistory'

class App extends Component {
  render() {


    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
          <Search />
        </div>
        <div>
          <JobHistory />
          <AllJobs />
          <JobInfo />
        </div>
      </div>
    );
  }
}

export default App;
