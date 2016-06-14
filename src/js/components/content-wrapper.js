import React, { Component } from 'react';
import update from 'react-addons-update';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

import Panel from './panel';

class ContentWrapper extends Component {

  updateStatus(taskIndex, desc, id, link){
    let newState = this.props.tasks;

    let updatedState = update(newState,
      { [taskIndex] :
        { tasks :
          { [id] :
            { $set: { desc, status: 'complete', link }}
          }
        }
      }
    );

    const taskUpdated = updatedState;

    this.props.updateTasks(taskUpdated);

  }

  render(){
    const data = this.props.tasks;
    var totalComplete = 0;
    var totalTasks = 0;

    for (let props in data) {
      for(let task in data[props].tasks) {
        if(data[props].tasks[task].status === 'complete'){
          totalComplete++;
          totalTasks++;
        } else {
          totalTasks++;
        }
      };
    }

    const tasks = this.props.tasks.map( (task, i) => {
      return <Panel id={task.id} name={task.name} taskIndex={i} key={i} tasks={task.tasks} updateStatus={this.updateStatus.bind(this)} />
    });

    const percentage = Math.round(totalComplete/totalTasks * 100);

    const style = {
      width: percentage + '%'
    }

    if(percentage < 50){
      var progressBar = <div className="progress-bar striped" role="progressbar" style={style}>
      </div>
    } else if(percentage < 99){
      var progressBar = <div className="progress-bar striped almost" role="progressbar" style={style}>
      </div>
    } else {
      var progressBar = <div className="progress-bar striped done" role="progressbar" style={style}>
      </div>
    }

    return(
      <div id="content-wrapper">
        <div id="content" className="padding-all">
          <div className="default-box">
            <div className="padding-all">
              <div className="ibox-panel ibox-nav">
                <h2>Setup Progress</h2>
                <div className="progressive">
                  {progressBar}
                </div>
                <span className="amount-complete">{percentage}% Complete</span>
                <p className={percentage === 100 ? 'congrats' : 'hidden'}>Way to go! You are a certified Modyo pro! Now, go great awesome digital experiences!</p>
              </div>
              { tasks }
              <div className="clear"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { tasks: state.tasks }
}

export default connect(mapStateToProps, actions)(ContentWrapper);
