import React, { Component } from 'react';

export default class Note extends Component {
  render(){

    let note = this.props.note;

    return(
      <div className="card padding-all">
        <div className="title">
          <img src={note.avatar} className="avatar" />
          <span className="text">
            <span className="title-user">{note.author}</span>
          </span>
          <span className="date">{note.date}</span>
        </div>
        <div>
          {note.message}
        </div>
      </div>
    );
  }
}
