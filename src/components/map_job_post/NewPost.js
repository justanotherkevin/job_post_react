import React, {Component} from 'react';
import axios from 'axios';

class NewPost extends Component {

    constructor(props) {
        super(props);
        this.state = {
            newjob: {
                title: "helllo",
                company_name: "company name",
                location: "Location",
                skills: "Skills",
                summary: "summary",
                lower_salary: "0",
                upper_salary: "0",
                date_created: ""
            }
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.getSummaryField = this.getSummaryField.bind(this);
    }

    handleChange(event) {
        switch (event.target.className) {
            case 'new_post_post_title':
                this.setState({
                    newjob: {
                        title: event.target.value
                    }
                });
            case 'new_post_company_name':
                this.setState({
                    newjob: {
                        company_name: event.target.value
                    }
                });
            case 'new_post_location':
                this.setState({
                    newjob: {
                        location: event.target.value
                    }
                });
            case 'new_post_skills':
                this.setState({
                    newjob: {
                        skills: event.target.value
                    }
                });
            case 'new_post_summay':
                this.setState({
                    newjob: {
                        summary: event.target.value
                    }
                });
            default:
                return null;
        }
    }

    handleSubmit(event) {
        this.postJobToApi(this.state.newjob)
        alert('A name was submitted: ' + this.state.newjob);
        // post to rails api ==> make new job into jobpost database
        // recall database for new updated jobposts data
        // should then auto re-render with new wjob on top of all jobposts data state
        event.preventDefault();
    }
    postJobToApi(data) {
        console.log(data);
        const self = this;
        axios.post('http://localhost:3000/job_posts', data).then(function(response) {
            // after successful POST, mount the a GET call
            self.props.mountApiGetData();
        }).catch(function(error) {
            // if there is an error?
            alert('Seem like theres an error on our end');
        });
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

    render() {

        return (
            <div className="new_post_wrapper">
                <h3 className="new_post_header">This is posting a job!</h3>
                <form className="new_post_form" onSubmit={this.handleSubmit}>
                    <label>
                        Post Title:
                        <input className="new_post_post_title" defaultValue="Job Title" onChange={this.handleChange}/>
                    </label>
                    <label>
                        Company Name:
                        <input className="new_post_company_name" defaultValue="Company Name" onChange={this.handleChange}/>
                    </label>
                    <label>
                        Location:
                        <input className="new_post_location" defaultValue="Location" onChange={this.handleChange}/>
                    </label>
                    <label>
                        Desire Skills:
                        <input className="new_post_skills" defaultValue="Skills" onChange={this.handleChange}/>
                    </label>
                    <label>
                        Summary:
                        <textarea className="new_post_summay" defaultValue="Company Summary" autoFocus={true} onChange={this.handleChange}/>
                    </label>
                    <label>
                        <input type="submit" value="Submit"/>
                    </label>

                </form>
            </div>
        )
    }
}
export default NewPost;
