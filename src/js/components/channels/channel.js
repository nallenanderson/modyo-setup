import React, { Component } from 'react';

export default class Channel extends Component {

  render(){

    const teamPlayers = this.props.channel.people.map((user, i) => {
      return(
        <tr key={i}>
          <td>{user.first}</td>
          <td>{user.last}</td>
          <td>{user.email}</td>
          <td>{user.title}</td>
          <td className="last-one"><span className="remove-user" onClick={this.props.removeUser.bind(this, this.props.channel.id, i)}><i className="ion-close"></i></span></td>
        </tr>
      );
    });

    const actionButton = <div className="dropdown pull-right">
      <button className="btn btn-white dropdown-toggle" type="button" data-toggle="dropdown"><i className="ion-gear-b"></i></button>
      <ul className="dropdown-menu">
        <li><a href="/"><i className="ion-edit"></i> Edit</a></li>
        <li><a href="/"><i className="ion-checkmark-circled"></i> Activate</a></li>
        <li><a href="/"><i className="ion-close-round"></i> Delete</a></li>
      </ul>
    </div>;

    return(
      <div className="channel">
        <h3 className="custom">{this.props.channel.title} <button className="btn btn-white pull-right" data-toggle="modal" data-target="#channelModal" style={{ marginTop: -10 }}><i className="ion-gear-b"></i></button></h3>
          <table className="table">
            <thead className="thead-default">
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Title</th>
                <th><span className="transparent">#</span></th>
              </tr>
            </thead>
            <tbody>
              {teamPlayers}
            </tbody>
          </table>
      </div>
    );
  }
}
