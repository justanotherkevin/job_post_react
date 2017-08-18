import React, {Component} from 'react';
import axios from 'axios';
// This is also reused for edit/updating a post
class NewPost extends Component {

    constructor(props) {
        super(props);
        this.state = {
            editingMode: false,
            newjob: {
                title: "",
                company_name: "",
                location: "",
                skills: "",
                summary: "",
                salary: "50000",
                date_created: "",
            }
        };
        this.closeNewPost = this.closeNewPost.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.createJob = this.createJob.bind(this);
        this.updateJob = this.updateJob.bind(this);
    }
    // if coming to edit/update job => set state, else creating new job use blank state
    componentWillMount() {
        if (this.props.jobInfo) {
          const jobInfo = this.props.jobInfo;
          this.setState({newjob: jobInfo, editingMode: true});
        } else {
          console.log("not hello");
        }
    }
    // using className to apply same function to all input field when input change
    handleChange(event) {
        const targetClassName = event.target.className.split(" ")[0].replace("new_post_", "")
        const modNewjob = this.state.newjob

        modNewjob[targetClassName] = event.target.value

        this.setState({
            newjob: modNewjob
        });
    }

    // post routes to api; remount App state
    createJob(event) {
        const newJob = this.state.newjob
        const self = this;
        axios.post('http://localhost:3000/job_posts', newJob).then( (response) => {
            self.props.mountApiGetData();
            alert('A new post was submitted');
        }).catch( (error) => {
            alert('Seem like theres an error on our end');
        });
        event.preventDefault();
    }

    // put routes to update/edit a job; remount App state
    updateJob(event) {
        const thisJob = this.state.newjob
        const self = this;
        const url = `http://localhost:3000/job_posts/${thisJob.id}`
        axios.put(url, thisJob ).then( (res) => {
            self.props.mountApiGetData();
            alert('Job updated');
        }).catch( (error) => {
            alert('Seem like theres an error on our end');
        });
        event.preventDefault();
    }

    getDateTime() {
        const date = new Date()
        const datevalues = [
            date.getFullYear(), date.getMonth() + 1,
            date.getDate(),
            date.getHours(),
            date.getMinutes(),
            date.getSeconds()
        ];
        return datevalues;
    }

    closeNewPost() {
        this.props.showGoogleMap();
    }

    render() {
        const submitForm = this.state.editingMode === true
            ? this.updateJob
            : this.createJob

        return (
            <div className="new_post_wrapper">

                <h3 className="new_post_header">This is posting a job!</h3>

                <form className="new_post_form" onSubmit={submitForm}>

                    <div className="input_group">
                        <div className="company_name_and_location_wrapper">
                            <div className="company_name_wrapper">
                                <input
                                    className={"new_post_company_name form_control " + (this.state.newjob['company_name'] === ''? '' : 'has_value') }
                                    value={this.state.newjob.company_name}
                                    onChange={this.handleChange}/>
                                <label>Company Name:</label>
                            </div>
                            <div className="company_location_wrapper">
                                <input
                                    className={"new_post_location form_control " + (this.state.newjob['location'] === ''? '' : 'has_value') }
                                    value={this.state.newjob.location}
                                    onChange={this.handleChange}/>
                                <label>Location:</label>
                            </div>
                        </div>
                    </div>

                    {/* <div className="input_group">
                        <input
                            className={"new_post_location form_control " + (this.state.newjob['location'] === ''? '' : 'has_value') }
                            value={this.state.newjob.location}
                            onChange={this.handleChange}/>
                        <label>Location:</label>
                    </div> */}

                    <div className="input_group">
                        <input
                            className={"new_post_title form_control " + (this.state.newjob['title'] === ''? '' : 'has_value') }
                            type="text"
                            value={this.state.newjob.title}
                            onChange={this.handleChange}/>
                        <label>Post Title:</label>
                    </div>

                    <div className="input_group">
                        <textarea
                            className={"new_post_summary form_control " + (this.state.newjob['summary'] === ''? '' : 'has_value') }
                            value={this.state.newjob.summary}
                            onChange={this.handleChange}/>
                        <label>Summary:</label>
                    </div>

                    <div className="input_group">
                        <input
                            className={"new_post_skills form_control " +  (this.state.newjob['skills'] === ''? '' : 'has_value') }
                            value={this.state.newjob.skills}
                            onChange={this.handleChange}/>
                        <label>Desire Skills:</label>
                    </div>

                    <div className="input_group">
                        <div className="ect_wrapper">

                            <div className="job_salary_wrapper">
                                <label>Salary:</label>
                                <input className="new_post_salary" value={this.state.newjob.salary} onChange={this.handleChange} type="range" min="50000" max="200000" step="10" />
                                {/* { this.state.newjob.salary === "" &&
                                <label>$50000</label> } */}
                                <label>${ this.state.newjob.salary}</label>
                            </div>

                            <div className="job_type_wrapper">
                                <select value="full-time">
                                    <option value="full-time">Full-Time</option>
                                    <option value="part-time">Part-Time</option>
                                    <option value="no-time">No-Time</option>
                                </select>
                            </div>
                        </div>

                    </div>

                    <button
                        type="submit"
                        className="form_submit_button">
                        hello
                    </button>

                    <button onClick={this.closeNewPost} >close me </button>
                </form>
            </div>
        )
    }
}
export default NewPost;
