import React, { Component } from 'react';

import './styles/BadgeNew.css';
import header from '../images/badge-header.svg';
import Navbar from '../components/Navbar';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';

class BadgeNew extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="Logo "/>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge 
                firstName="Hector"
                lastName="Flores"
                twitter="hecto932"
                jobTitle="Javascript Developer"
                avatarUrl="https://s.gravatar.com/avatar/c7fbfbcf4ded30f0cd55029f7c43205d?s=80"
              />
            </div>
            <div className="col-6">
              <BadgeForm />
            </div> 
          </div>
        </div>
      </div>
    )
  }
}

export default BadgeNew;