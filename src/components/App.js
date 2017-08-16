import React, {Component} from 'react';
import axios from 'axios';
import '../styles/App.css';
// import data for testing
import jobsData from '../data/allJobData';

import Search from './SearchBar';
import AllJobs from './jobs/AllJobs';
import JobHistory from './jobs/JobHistory';
import MapJobPost from './map_job_post/MapJobPost';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allJobsData: [],
            // jobHistoryData: [],
            oneJob: [],
            renderType: "map",
            mapJobPostData: []
        };
        this.showOneJob = this.showOneJob.bind(this);
        this.showGoogleMap = this.showGoogleMap.bind(this);
        this.showPostJob = this.showPostJob.bind(this);
        this.mountApiGetData = this.mountApiGetData.bind(this);
    };

    componentWillMount() {
        this.mountApiGetData();
    };

    mountApiGetData() {
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

    showPostJob() {
        // toggle between show new-post and google-map
        let mapOrJob = this.state.renderType == "map" ? "new_post" : "map"
        this.setState({
            renderType: mapOrJob
        })
    }

    showGoogleMap() {
        this.setState({renderType: "map"})
    }

    render() {
        // This create const for each state; don't need to always type this.state.(state)
        const {allJobsData, jobHistoryData, mapJobPostData, oneJob, renderType} = this.state


        return (
            <div className="App">
                <div className="App-header">
                    <h2>Welcome to React</h2>
                    <Search/>

                    <svg
                        className="add_post_svg"
                        onClick={this.showPostJob}
                        width="32px"
                        height="32px"
                        viewBox="0 0 32 32"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">

                            <g id="add_post" transform="translate(-466.000000, -1089.000000)" fill="#FFFFFF">
                                <path d="M488,1106 L483,1106 L483,1111 C483,1111.55 482.553,1112 482,1112 C481.447,1112 481,1111.55 481,1111 L481,1106 L476,1106 C475.447,1106 475,1105.55 475,1105 C475,1104.45 475.447,1104 476,1104 L481,1104 L481,1099 C481,1098.45 481.447,1098 482,1098 C482.553,1098 483,1098.45 483,1099 L483,1104 L488,1104 C488.553,1104 489,1104.45 489,1105 C489,1105.55 488.553,1106 488,1106 L488,1106 Z M482,1089 C473.163,1089 466,1096.16 466,1105 C466,1113.84 473.163,1121 482,1121 C490.837,1121 498,1113.84 498,1105 C498,1096.16 490.837,1089 482,1089 L482,1089 Z" id="Fill-25"></path>
                            </g>

                    </svg>

                </div>
                <div className="app_body_wrapper">
                    {/* <JobHistory
                        jobHistory={jobHistoryData}
                    /> */}
                    <AllJobs
                        allJobs={allJobsData}
                        showOneJob={this.showOneJob}
                    />
                    <MapJobPost
                        mapJobPostData={mapJobPostData}
                        renderType={renderType}
                        mountApiGetData={this.mountApiGetData}
                        showGoogleMap={this.showGoogleMap}
                    />
                </div>
            </div>
        );
    }
}

export default App;
