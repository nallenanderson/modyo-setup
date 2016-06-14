import React, { Component } from 'react';
import { Link } from 'react-router';

import MainMenu from '../main-menu';
import CustomTable from './custom-table';
import SignUp from './sign-up';

export default class Custom extends Component {

  constructor(props){
    super(props);
    this.state = {
      showSign: true
    }
  }

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
              <div className="default-box col-md-3">
                <div className="channel-box">
                  <ul className="list-group">
                    <a className={this.state.showSign ? "list-group-item chill active custom" : "list-group-item chill"} onClick={() => this.setState({ showSign: true })}>Sign Up</a>
                    <a className={!this.state.showSign ? "list-group-item chill active custom" : "list-group-item chill"} onClick={() => this.setState({ showSign: false })}>Custom Fields</a>
                  </ul>
                </div>
              </div>
              <div className="default-box col-md-9 full-action">
                <div className="padding-all">
                  {this.state.showSign ? <SignUp /> : <CustomTable />}
                </div>
              </div>
              <div id="footer">
                <Link to="/">
                  <button className="btn btn-default pull-right">
                    Save
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
