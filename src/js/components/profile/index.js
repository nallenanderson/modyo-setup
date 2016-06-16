import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';
import MainMenu from '../main-menu';
import Content from '../content';
import ProfileSection from './profile-section';
import UserInfo from './user-info';
import UserActivity from './user-activity';

class Profile extends Component {

  updateActivities(activities){
    this.props.addActivity(activities);
    this.forceUpdate();
  }

  render(){
    return(
      <div>
        <div id="main" className={!this.props.showMenu ? "" : "showMenu"}>
          <div id="page-context">
            <div id="page-context-header">
              <h1>
                <button className="outer" onClick={this.props.openMenu} >
                  <span id="nav-toggle" className={!this.props.showMenu ? "" : "active"}>
                    <span></span>
                  </span>
                </button>
                Profile
              </h1>
            </div>
          </div>
          <div id="content-wrapper">
            <ProfileSection updateActivities={this.updateActivities.bind(this)} />
            <UserInfo name="Nathan Anderson" email="nate@modyo.com" login="7 minutes ago" type="User" />
            <UserActivity activities={this.props.activities} />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    activities: state.activities
  }
}

export default connect(mapStateToProps, actions)(Profile);
