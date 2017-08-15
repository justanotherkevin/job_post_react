import React, {Component} from 'react';
import axios from 'axios';

class NewPost extends Component {

    constructor(props) {
        super(props);
        this.state = {
            newjob: {
                title: "",
                company_name: " ",
                location: "",
                skills: "",
                summary: "",
                lower_salary: "",
                upper_salary: "",
                date_created: ""
            }
        };
        this.closeNewPost = this.closeNewPost.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const targetClassName = event.target.className.split(" ")[0].replace("new_post_", "")
        const modNewjob = this.state.newjob

        modNewjob[targetClassName] = event.target.value

        this.setState({
            newjob: modNewjob
        });
    }

    handleSubmit(event) {
        this.postJobToApi(this.state.newjob)
        alert('A new post was submitted');
        // post to rails api ==> make new job into jobpost database
        // recall database for new updated jobposts data
        // should then auto re-render with new wjob on top of all jobposts data state
        event.preventDefault();
    }
    postJobToApi(data) {

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
    closeNewPost() {
        this.props.showGoogleMap();
    }

    render() {

        return (
            <div className="new_post_wrapper">
                <button onClick={this.closeNewPost} >close me </button>
                <h3 className="new_post_header">This is posting a job!</h3>

                <form className="new_post_form" onSubmit={this.handleSubmit}>

                    <div className="input_group">
                        <input
                            className="new_post_title form_control"
                            type="text"
                            value={this.state.title}
                            onChange={this.handleChange}/>
                        <label>Post Title:</label>
                    </div>

                    <div className="input_group">
                        <input
                            className="new_post_company_name form_control"
                            value={this.state.company_name}
                            onChange={this.handleChange}/>
                        <label>Company Name:</label>
                    </div>

                    <div className="input_group">
                        <input
                            className="new_post_location form_control"
                            value={this.state.location}
                            onChange={this.handleChange}/>
                        <label>Location:</label>
                    </div>

                    <div className="input_group">
                        <input
                            className="new_post_skills form_control"
                            value={this.state.skills}
                            onChange={this.handleChange}/>
                        <label>Desire Skills:</label>
                    </div>

                    <div className="input_group">
                        <textarea
                            className="new_post_summay form_control"
                            value={this.state.summary}
                            onChange={this.handleChange}/>
                        <label>Summary:</label>
                    </div>
                    <label>
                        <input type="submit" value="Submit"/>
                    </label>
                </form>
            </div>
        )
    }
}
export default NewPost;
