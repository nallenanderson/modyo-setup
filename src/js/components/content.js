import React, { Component } from 'react';

import ContentWrapper from './content-wrapper';

export default class Content extends Component {
  render(){
    return(
      <div id="main">
        <div id="page-context">
          <div id="page-context-header">
            <h1>Setup</h1>
          </div>
          <ContentWrapper />
        </div>
      </div>
    );
  }
}
