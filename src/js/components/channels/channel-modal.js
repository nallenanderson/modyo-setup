import React, { Component } from 'react';

import { comunas, importedUsers } from '../../data';

export default class ChannelModal extends Component {

  constructor(props){
    super(props);
    this.state = {
      targets: [],
      people: []
    }

    this.comunas = comunas;
    this.importedUsers = importedUsers;
  }

  addTarget(target){
    console.log(target)
    this.state.targets.push(target);
    this.setState({ targets: this.state.targets });
    console.log(this.state.targets);
  }

  addTeammate(first, last){
    const person = first + " " + last;
    this.state.people.push(person);
    this.setState({ people: this.state.people });
  }

  render(){

    const targets = comunas.map((comuna, i) => {
      return <a key={i} className="list-group-item" onClick={this.addTarget.bind(this, comuna.label)}>{comuna.label}</a>;
    });

    const myTeam = importedUsers.map( (member, i) => {
      return <a key={i} className="list-group-item" onClick={this.addTeammate.bind(this, member.first, member.last)}>{member.first} {member.last}</a>
    });

    return(
      <div className="modal fade tagModal" id="channelModal" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header text-center">
              <button type="button" className="close" data-dismiss="modal">&times;</button>
              <h4 className="modal-title">Create a new channel</h4>
            </div>
            <div className="modal-body first">
              <div className="add-tag">
                <input className="inline-input" placeholder="Add channel name..." />
                <input type="submit" hidden />
                <span id="mock-cursor">|</span>
              </div>
              <div className="clear"></div>
            </div>
            <div className="modal-body second">
              <strong>Add targets:</strong>
              <div className="list-group">
                { targets }
              </div>

              <hr />

              <strong>Add teammates:</strong>
              <div className="list-group">
                { myTeam }
              </div>

              <button className="btn btn-default pull-right" data-dismiss="modal" style={{ marginRight: 0 }}>Create</button>

            </div>
            <div className="clear"></div>
          </div>
        </div>
      </div>
    );
  }
}
