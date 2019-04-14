import React, { Component, Fragment } from "react";
import md5 from 'md5';

import './styles/BadgeNew.css';
import header from '../images/platziconf-logo.svg';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';

import api from '../api';

class BadgeNew extends Component {
  state = {
    form: {
      firstName: '',
      lastName: '',
      email: '',
      jobTitle: '',
      twitter: '',
      avatarUrl: '',
    } 
  };

  handleSubmit = async e => {
    e.preventDefault();
    this.setState({ loading: true, error: null });
    try {
      await api.badges.create(this.state.form);
      this.setState({ loading: false });
    } catch (err) {
      this.setState({ loading: false, error: err })
    }
  }

  handleChange = e => {
    // const nextForm = this.state.form;
    // nextForm[e.target.name] = e.target.value;
    // this.setState({
    //   form: nextForm
    // })
    const email = this.state.form.email
    const hash = md5(email);
    this.setState({
      form: {
        ...this.state.form,
        avatarUrl: `https://s.gravatar.com/avatar/${hash}?d=identicon`,
        [e.target.name]: e.target.value
      }
    });
  };
  render() {
    
    return (
      <Fragment>
        <div className="BadgeNew__hero">
          <img className="BadgeNew__hero-image img-fluid" src={header} alt="Logo " />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName={this.state.form.firstName || 'FIRSTNAME'}
                lastName={this.state.form.lastName || 'LASTNAME'}
                email={this.state.form.email || 'EMAIL'}
                twitter={this.state.form.twitter || 'Twitter'}
                jobTitle={this.state.form.jobTitle || 'JOB_TITLE'}
                avatarUrl={this.state.form.avatarUrl}
              />
            </div>
            <div className="col-6">
              <BadgeForm
                onChange={this.handleChange}
                formValues={this.state.form}
                onSubmit={this.handleSubmit}
              />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default BadgeNew;
