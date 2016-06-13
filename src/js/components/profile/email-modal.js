import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';

const emailInfo = {
  from: "You",
  to: "Nate Anderson",
  activity: "Messaging",
  date: "Now",
  avatar: "https://static.intercomassets.com/avatars/478313/square_128/nate-1463665377.jpg?1463665377"
}

class EmailModal extends Component {

  sendEmail(e){
    e.preventDefault();

    const allActivities = this.props.activities;

    emailInfo.activity_name = `sent ${this.refs.title.value}`;
    emailInfo.detail = this.refs.body.value;

    allActivities.unshift(emailInfo);

    this.props.updateActivities(allActivities);
    this.refs.emailForm.reset();

    $('#emailModal').modal('hide');
  }
  render(){
    return(
      <div className="modal fade emailer" id="emailModal" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header text-center">
              <button type="button" className="close" data-dismiss="modal">&times;</button>
              <h4 className="modal-title">Send a Message</h4>
            </div>
            <div className="modal-body first">
              <strong>To</strong>: Nate Anderson
            </div>
            <div className="modal-body">
              <form ref="emailForm" id="emailForm" className="reply-box" onSubmit={this.sendEmail.bind(this)}>
                <input ref="title" placeholder="Enter email title." className="form-control" style={{marginBottom: 8}}/>
                <textarea placeholder="Please enter your reply..." ref="body" />
                <button className="white" data-dismiss="modal">Close</button>
                <button className="" type="submit">Reply</button>
                <div className="clear"></div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return { activities: state.activities };
}

export default connect(mapStateToProps, actions)(EmailModal);
