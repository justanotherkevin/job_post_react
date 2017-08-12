import React, { Component } from 'react';

class NewPost extends Component {


  constructor(props) {
    super(props);
    this.state = {
      newjob: {
        title:"helllo",
        company_name:"company name",
        location: "Location",
        skill: "Skills",
        summary: "summary"
      }
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getSummaryField = this.getSummaryField.bind(this);
  }

  handleChange(event) {
    switch(event.target.className) {
        case 'new_post_post_title':
            this.setState({newjob: {title: event.target.value}});
        case 'new_post_company_name':
            this.setState({newjob: {company_name: event.target.value}});
        case 'new_post_location':
            this.setState({newjob: {location: event.target.value}});
        case 'new_post_skills':
            this.setState({newjob: {skills: event.target.value}});
        // case 'new_post_location':
        //     this.setState({newjob: {location: event.target.value}});
        default:
            return null;
    }
  }

  handleSubmit(event) {
    debugger
    // event.target[0].value
    this.setState({
      newjob: {title: event.target[0].value}
    });
    alert('A name was submitted: ' + this.state.newjob);

    // postJobToApi(event)
    // post to rails api ==> make new job into jobpost database
    // recall database for new updated jobposts data
    // should then auto re-render with new wjob on top of all jobposts data state
    event.preventDefault();
  }
  postJobToApi(data) {
    debugger
    console.log(data);
    // axios.post('/job_posts', {
    //   firstName: 'Fred',
    //   lastName: 'Flintstone'
    // })
    // .then(function (response) {
    //   console.log(response);
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });
  }
  getSummaryField() {
    return (
      <textarea
        componentClass="textarea"
        autoFocus={true}
        value={this.state.value}
        onChange={this.handleChange} />
    )
  }

  render() {

    return (
      <div>
        <h3>This is posing a job!</h3>
        <form className="new_post_form" onSubmit={this.handleSubmit}>
          <label>
            Post Title:
            <input className="new_post_post_title" defaultValue="Job Title" onChange={this.handleChange}/>
          </label>
          <label>
            Company Name:
            <input className="new_post_company_name" defaultValue="Company Name" onChange={this.handleChange} />
          </label>
          <label>
            Location:
            <input className="new_post_location" defaultValue="Location" onChange={this.handleChange} />
          </label>
          <label>
            Desire Skills:
            <input className="new_post_skills" defaultValue="Skills" onChange={this.handleChange} />
          </label>

          <label>
            Summary:
            <textarea
              componentClass="textarea"
              autoFocus={true}
              defaultValue="Company Summary"
              onChange={this.handleChange} />
          </label>
          <label>
            <input type="submit" value="Submit" />
          </label>

        </form>
      </div>
    )
  }
}
export default NewPost;
