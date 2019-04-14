import React, { Component } from 'react';

class BadgeForm extends Component {

  handleChange = (e) => {
    console.log({
      name: e.target.name,
      value: e.target.value
    });
  }

  handleClick = () => {
    console.log('Button was clicked');
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form was submitted')
  }

  render() {
    return (
      <div className="">
        <h1>New Attendant</h1>

        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>First Name</label>
            <input onChange={this.handleChange} className="form-control" type="text" name="firstName" />
          </div>
          <button type="submit" onClick={this.handleClick} className="btn btn-primary">Save</button>
        </form>
      </div>
    )
  }
}

export default BadgeForm;
