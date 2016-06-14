import React, { Component } from 'react';

import { importedUsers } from '../../data';

export default class Channel extends Component {
  render(){

    const teamPlayers = importedUsers.map((user, i) => {
      return(
        <tr key={i}>
          <td>{user.first}</td>
          <td>{user.last}</td>
          <td>{user.email}</td>
          <td>{user.title}</td>
        </tr>
      );
    });
    return(
      <div className="channel">
        <h3>{this.props.channel.title} <button className="btn btn-primary btn-white pull-right"><i className="ion-gear-b"></i></button></h3>
          <table className="table">
            <thead className="thead-default">
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Title</th>
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
