import React, { Component } from 'react';

import MainMenu from '../main-menu';

export default class Tutorials extends Component {

  render(){
    return(
      <div>
        <MainMenu />
        <div id="main" className={!this.props.showMenu ? "" : "showMenu"}>
          <div id="page-context">
            <div id="page-context-header">
              <h1>
                <button className="outer" onClick={this.props.openMenu} >
                  <span id="nav-toggle" className={!this.props.showMenu ? "" : "active"}>
                    <span></span>
                  </span>
                </button>
                Tutorials
              </h1>
            </div>
          </div>
          <div id="content-wrapper">
            <div id="content" className="padding-all">
              <div className="default-box full-actions">
                <div className="padding-all">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  <div className="clear"></div>
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
