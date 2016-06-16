import React from 'react';
import Activity from './activity';

const ActivityCard = (props) => {

    const showActivities = props.activities.map( (activity, i) => {
      return <Activity key={i} activity={activity} />
    });

    return (
      <div>{showActivities}</div>
    )

}

export default ActivityCard;
