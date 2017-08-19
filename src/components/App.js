import React, {Component} from 'react';
import axios from 'axios';
import '../styles/App.css';
// import data for testing
import jobsData from '../data/allJobData';
import { findDOMNode } from 'react-dom';

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
            mapJobPostData: [],
            notification: "Landing aimation, such wow"
        };
        this.showOneJob = this.showOneJob.bind(this);
        this.showGoogleMap = this.showGoogleMap.bind(this);
        this.showPostJob = this.showPostJob.bind(this);
        this.mountApiGetData = this.mountApiGetData.bind(this);
        this.setHeaderMessage = this.setHeaderMessage.bind(this);
    };

    // set the state before rendering the DOM, so that the DOM does not show blank for a few sec
    componentWillMount() {
        this.mountApiGetData();
    };
    componentDidUpdate() {
        if(this.animatedTextRef)
            this.animatedTextRef.startAnimation(500, 0, () => {
         })
    }
    // call the rails api to get data, the set the state with respose
    mountApiGetData() {
        const self = this;
        axios.get('http://localhost:3000/job_posts').then(function(response) {
            // user data from api call
            self.setState({allJobsData: response.data});
        }).catch(function(error) {
            // use hardcoded data if error
            // self.setState({allJobsData: jobsData});
        });
    };

    // function to trigger show one job details
    showOneJob(data) {
        this.setState({
            mapJobPostData: data,
            renderType: "job_info"
        })
    }

    // toggle between show new-post and google-map
    showPostJob(event) {
        const rotateDeg = this.state.renderType === "map"
            ? 'rotate(45deg)'
            : 'rotate(0deg)';
        const mapOrJob = this.state.renderType === "map" ? "new_post" : "map"

        event.currentTarget.style.transform = rotateDeg;
        if (rotateDeg === "rotate(45deg)" ) {
            event.currentTarget.style.backgroundColor ="#1ECD97"
            event.currentTarget.style.fill = "#FFCB7C"
        } else {
            event.currentTarget.style.backgroundColor = "white";
            event.currentTarget.style.fill = "#1ECD97"
        }
        this.setState({
            renderType: mapOrJob
        })
    }
    // function to show the map
    showGoogleMap() {
        this.setState({renderType: "map"})
    }
    setHeaderMessage(string) {
        this.setState({notification:string})
        const el = findDOMNode(this.refs.header_message)
        debugger
        // el.style.animation = 'tracking-in-contract-bck 5s forwards'
    }
    render() {
        // This create const for each state; don't need to always type this.state.(state)
        const {allJobsData, jobHistoryData, mapJobPostData, oneJob, renderType, notification} = this.state
        return (
            <div className="App">
                <div className="App_header">
                    {/* mayebe we want a header? */}
                    <h3 className="header_message" ref={ci => this.animatedTextRef = ci}>{notification}</h3>
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
                        showPostJob={this.showPostJob}
                        setHeaderMessage={this.setHeaderMessage}
                    />
                </div>
            </div>
        );
    }
}

export default App;
