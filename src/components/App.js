import React, {Component} from 'react';
import '../styles/App.css';
// import data for testing
import jobsData from '../data/allJobData';
import Search from './SearchBar';
import AllJobs from './jobs/AllJobs';
import JobHistory from './jobs/JobHistory';
import MapJobPost from './map_job_post/MapJobPost';

import axios from 'axios';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allJobsData: [],
            jobHistoryData: [],
            oneJob: [],
            renderType: "map",
            mapJobPostData: []
        };
        this.showOneJob = this.showOneJob.bind(this)
        this.showPostNewJob = this.showPostNewJob.bind(this)
    };

    componentWillMount() {
        const self = this;
        axios.get('http://localhost:3000/job_posts').then(function(response) {
            // user data from api call
            self.setState({allJobsData: response.data});
        }).catch(function(error) {
            // use hardcoded data if error
            self.setState({allJobsData: jobsData});
        });
    };

    showOneJob(data) {
        this.setState({
            // the child will chose to send which job to show
            mapJobPostData: data,
            renderType: "job_info"
        })
    }

    showPostNewJob() {
        this.setState({renderType: "new_post"})
    }

    render() {
        // This create const for each state; don't need to always type this.state.(state)
        const {allJobsData, jobHistoryData, mapJobPostData, oneJob, renderType} = this.state

        return (
            <div className="App">
                <div className="App-header">
                    <h2>Welcome to React</h2>
                    <Search/>
                    <button onClick={this.showPostNewJob}>Post A Job</button>
                </div>
                <div className="app_body_wrapper">
                    <JobHistory jobHistory={jobHistoryData}/>
                    <AllJobs allJobs={allJobsData} showOneJob={this.showOneJob}/>
                    <MapJobPost mapJobPostData={mapJobPostData} renderType={renderType}/>
                </div>
            </div>
        );
    }
}

export default App;
