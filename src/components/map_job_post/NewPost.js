import React, { Component } from 'react';

class NewPost extends Component {

  postAJob(data) {
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
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getSummaryField = this.getSummaryField.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    
    event.preventDefault();
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
        <form onSubmit={this.handleSubmit}>
          <input value="Job Title" />
          <input value="Company Name" />
          <input value="Location" />
          <input value="Skills" />

          <label>
            {this.getSummaryField()}
          </label>
          <input type="submit" value="Submit" />

        </form>
      </div>
    )
  }
}
export default NewPost;
