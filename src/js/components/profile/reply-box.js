import React, { Component } from 'react';

export default class ReplyBox extends Component {

  constructor(){
    super();


  }

  closeBox(e){
    e.preventDefault();
    this.props.handleClose();
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.formSubmit(this.refs.reply.value);
    this.refs.commentForm.reset();
  }

  render(){

    let reply;

    if(this.props.replies.length > 0){
      reply = this.props.replies.map( (reply, i) => {
        return (
          <div className="reply-activity" key={i}>
            <div className="title">
              <img src="https://static.intercomassets.com/avatars/478313/square_128/nate-1463665377.jpg?1463665377" className="avatar" />
              <span className="text">
                <span className="title-user">You</span> replied.
              </span>
              <span className="date">1 minute ago</span>
            </div>
            <div className="activity-detail blue">
              {reply}
            </div>
          </div>
        );
      });
    }

    return(
      <div>
        {reply}
        <form ref="commentForm" className="reply-box" onSubmit={this.handleSubmit.bind(this)}>
          <textarea placeholder="Please enter your reply..." ref="reply" />
          <button className="close" onClick={this.closeBox.bind(this)}>Close</button>
          <button className="" type="submit">Reply</button>
          <div className="clear"></div>
        </form>
      </div>
    );
  }
}
