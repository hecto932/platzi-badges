import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Gravatar from '../components/Gravatar';

import "./styles/BadgesList.css";

class BadgesListItem extends Component {
  render() {
    return (
      <div className="BadgesListItem">
        <Gravatar
          className="BadgesListItem__avatar"
          email={this.props.badge.email}
        />

        <div>
          <strong>
            {this.props.badge.firstName} {this.props.badge.lastName}
          </strong>
          <br />@${this.props.badge.twitter}
          <br />
          {this.props.badge.jobTitle}
        </div>
      </div>
    );
  }
}

class BadgesList extends Component {
  render () {
    if(this.props.badges.length === 0) {
      return (
        <div>
          <h3>No badge were found</h3>
          <Link className="btn btn-primary" to='/badges/new'>
            Create new badge
          </Link>
        </div>
      )
    }
    return (
      <div className="BadgesList">
        <ul className="list-unstyled">
          {this.props.badges.map(badge => {
            return (
              <li key={badge.id}>
                <Link className="text-reset text-decoration" to={`/badges/${badge.id}/edit`}>
                  <BadgesListItem badge={badge} />
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default BadgesList;
