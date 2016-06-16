import React from 'react';

import More from './more';

const Users = () => {
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
              Users
            </h1>
          </div>
        </div>
        <div id="content-wrapper">
          <div id="content" className="padding-all">
            <More title="I really like this title."/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Users;
