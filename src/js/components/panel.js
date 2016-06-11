import React, { Component } from 'react';
import { Link } from 'react-router';

class Panel extends Component {

  handleUpdate(i){
    if(this.props.tasks[i].status === 'incomplete'){
      this.props.updateStatus(this.props.taskIndex, this.props.tasks[i].desc, i);
    }
  }

  render(){

    const listTasks = this.props.tasks.map((task, i) => {
      return(
        <li key={i} onClick={this.handleUpdate.bind(this, i)}>
          <span className="links">
            <Link to={`${task.link}`}>
              <i className={task.status == 'complete' ? "ion-android-checkbox-outline" : "ion-android-checkbox-outline-blank"}></i> {task.desc}
            </Link>
          </span>
        </li>
      );
    });

    const totalTasks = this.props.tasks.length;

    let completedTasks = 0;

    for(let i = 0; i < totalTasks; i++){
      if(this.props.tasks[i].status === 'complete'){
        completedTasks++;
      }
    };

    return (
      <div className="ibox-panel">
        <label className={completedTasks === totalTasks ? "progress green": "progress"}>{ completedTasks } / { totalTasks }</label>
        <h2>{this.props.name}</h2>
        <ul className="setup-list">
          { listTasks }
        </ul>
      </div>
    );

  }
}

export default Panel;
