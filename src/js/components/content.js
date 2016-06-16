import React, { Component } from 'react';

import ContentWrapper from './content-wrapper';

export default class Content extends Component {
  render(){
    return(
      <div id="main" className={!this.props.showMenu ? "" : "showMenu"}>
        <div id="page-context">
          <div id="page-context-header">
            <h1>
              <button className="outer" onClick={this.props.openMenu} >
                <span id="nav-toggle" className={!this.props.showMenu ? "" : "active"}>
                  <span></span>
                </span>
              </button>
               Setup
              </h1>
          </div>
          <ContentWrapper />
        </div>
      </div>
    );
  }
}
