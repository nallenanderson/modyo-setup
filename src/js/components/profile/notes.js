// I may end up discarding this...

import React, { Component } from 'react';

import { notes } from '../../data';
import Note from './note';

export default class UserInfo extends Component {

  constructor(){
    super();
    this.state = {
      notes
    }
  }

  render() {

    const userNotes = this.state.notes.map((note, i) => {
      return <Note key={i} note={note} />;
    })

    return (
      <div >
        <h4>Notes</h4>
        {userNotes}
      </div>
    );
  }
}
