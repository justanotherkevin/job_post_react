import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/App.css';
import Search from './SearchBar'
import AllJobs from './jobs/AllJobs'
import JobInfo from './jobs/JobInfo'



class App extends Component {
  render() {


    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
          <Search />
        </div>
        <div>
          <AllJobs />
          <JobInfo />
        </div>
      </div>
    );
  }
}

export default App;
