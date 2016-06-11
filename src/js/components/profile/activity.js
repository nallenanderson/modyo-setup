import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';
import ReplyBox from './reply-box';

class Activity extends Component {

  constructor(){
    super();

    this.allReplies = [];

    this.state = {
      showReply: false,
      updated: false
    }

  }

  makeReply(){
    this.setState({ showReply: true });
  }

  formSubmit(reply){
    this.allReplies.push(reply);
    this.props.addReplies(this.allReplies);
    this.setState({ updated: true });
  }

  render(){

    const activity = this.props.activity;

    let showDetail;

    if(activity.detail){
      showDetail =
        <div>
          <div className="activity-detail" onClick={this.makeReply.bind(this)} dangerouslySetInnerHTML={{__html: activity.detail}}>
          </div>
          {this.state.showReply ?
            <ReplyBox
             handleClose={() => this.setState({ showReply: false })}
             formSubmit={this.formSubmit.bind(this)}
             replies={this.props.replies}
             /> :
             ''
           }
        </div>;
    }

    return (
      <div className="card padding-all">
        <div className="title">
          <img src={activity.avatar} className="avatar" />
          <span className="text">
            <span className="title-user">{activity.from}</span> {activity.activity_name} <span className="user">{activity.to}</span>.
          </span>
          <span className="date">{activity.date}</span>
        </div>
        {showDetail}
      </div>
    );
  }
}

function mapStateToProps(state){
  return { replies: state.replies };
}

export default connect(mapStateToProps, actions)(Activity);
