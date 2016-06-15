import React from 'react';
import Activity from './activity';

const ActivityCard = () => {

    const showActivities = this.props.activities.map( (activity, i) => {
      return <Activity key={i} activity={activity} />
    });

    return (
      <div>{showActivities}</div>
    )

}

export default ActivityCard;
