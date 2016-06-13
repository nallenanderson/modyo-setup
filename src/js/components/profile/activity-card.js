import React, { Component } from 'react';

import Activity from './activity';

export default class ActivityCard extends Component {

  render(){

    const showActivities = this.props.activities.map( (activity, i) => {
      return <Activity key={i} activity={activity} />
    });

    return (
      <div>{showActivities}</div>
    )

  }
}
