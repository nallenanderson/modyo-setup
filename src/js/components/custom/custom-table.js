import React, { Component } from 'react';

import { customFields } from '../../data';
import CustomModal from './custom-modal';

export default class CustomTable extends Component {

  constructor(props){
    super(props);

    this.state = {
      customFields
    }
  }

  addField(field){
    this.state.customFields.push(field);
    this.setState({ customFields: this.state.customFields });
  }

  render(){

    const actionButton = <div className="dropdown">
      <button className="btn btn-white dropdown-toggle" type="button" data-toggle="dropdown"><i className="ion-gear-b"></i></button>
      <ul className="dropdown-menu">
        <li><a href="/"><i className="ion-edit"></i> Edit</a></li>
        <li><a href="/"><i className="ion-checkmark-circled"></i> Activate</a></li>
        <li><a href="/"><i className="ion-close-round"></i> Delete</a></li>
      </ul>
    </div>;

    const fields = this.state.customFields.map((field, i) => {
      return (
        <tr key={i}>
          <td className="complex">
            <span className="first">{field.title}</span>
            <small>{field.desc}</small>
          </td>
          <td>{field.type}</td>
          <td>{field.status}</td>
          <td style={{ textAlign: 'right' }}>{actionButton}</td>
        </tr>
      );
    })

    return(
      <div className="channel">
        <h3 className="custom">Custom Fields <button className="btn btn-white pull-right" data-toggle="modal" data-target="#customModal" style={{ marginTop: -10 }}><i className="ion-plus"></i> New Field</button></h3>
        <table className="table">
          <thead className="thead-default">
            <tr>
              <th>Field Name</th>
              <th>Field Type</th>
              <th>Status</th>
              <th style={{ textAlign: 'right' }}>Action</th>
            </tr>
          </thead>
          <tbody>
            { fields }
          </tbody>
        </table>
        <CustomModal addField={this.addField.bind(this)} />
      </div>
    );
  }
}
