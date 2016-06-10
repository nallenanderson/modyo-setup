import React, { Component } from 'react';

import MainMenu from '../main-menu';
import Content from '../content';
import ProfileSection from './profile-section';
import UserInfo from './user-info';
import UserActivity from './user-activity';

export default class Profile extends Component {
  render(){
    return(
      <div>
        <div id="main">
          <div id="page-context">
            <div id="page-context-header">
              <h1>Profile</h1>
            </div>
          </div>
          <div id="content-wrapper">
            <ProfileSection />
            <UserInfo name="Nathan Anderson" email="nate@modyo.com" login="7 minutes ago" type="User" />
            <UserActivity />
          </div>
        </div>
      </div>
    );
  }
}
