import React, { Component } from 'react';

import Activity from './activity';
import { activities } from '../../data';

export default class ActivityCard extends Component {

  constructor(){
    super();
    this.state = {
      activities: []
    };
  }

  componentWillMount(){
    const activities = require('../../data').activities;
    this.setState({ activities })
  }

  showActivities(){
    this.state.activities.map((activity, i) => {

    })
  }

  render(){

    const showActivities = this.state.activities.map( (activity, i) => {
      return <Activity key={i} activity={activity} />
    });

    return (
      <div>{showActivities}</div>
    )

  }
}
