import React, { Component } from 'react';
import { Link } from 'react-router';

import MainMenu from '../main-menu';

export default class Custom extends Component {
  render(){
    return(
      <div>
        <MainMenu />
        <div id="main">
          <div id="page-context">
            <div id="page-context-header">
              <h1>Custom Fields</h1>
            </div>
          </div>
          <div id="content-wrapper">
            <div id="content" className="padding-all">
              <img src="https://cloud.modyocdn.com/uploads/5dbdf920319811e6880b7b0c4cc8460b/original/Screen_Shot_2016-06-13_at_2_56_44_PM.jpg" className="custom-fields-image" />
              <Link to="/">
                <button className="btn btn-default righty custom">Finish</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
