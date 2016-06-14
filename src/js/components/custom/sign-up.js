import React, { Component } from 'react';

import { customFields } from '../../data';
import CustomModal from './custom-modal';

export default class SignUp extends Component {

  constructor(props){
    super(props);

    this.state = {
      credentials: false,
      lastName: false,
      avatar: false,
      birthDate: false,
      gender: false,
      radio: null
    }
  }

  render(){

    return(
      <div className="channel">
        <h3 className="custom">Settings</h3>
        <div className="input-field">
          <input type="checkbox" checked={this.state.credentials}/>
          <label onClick={() => this.setState({ credentials: !this.state.credentials })}>
            Disable platform credentials
            <small style={{ display: 'block', lineHeight: 1.4, fontWeight: 300 }}>If the Platform Credentials are disabled the only way to access will be using one of the SSO mechanism. You neeed to ensure that at least one SSO mechanism is enabled before change this configuration.</small>
          </label>
        </div>

        <hr />

        <p className="lead">Signup method</p>
        <p>
          <input type="radio" id="directSign" checked={this.state.radio === 0} />
          <label htmlFor="directSign" onClick={() => this.setState({ radio: 0 })}>Direct (requires no moderation or email activation)</label>
        </p>
        <p>
          <input type="radio" id="emailSign" checked={this.state.radio === 1} />
          <label htmlFor="emailSign" onClick={() => this.setState({ radio: 1 })}>Email confirmation (recommended)</label>
        </p>
        <p>
          <input type="radio" id="modSign" checked={this.state.radio === 2} />
          <label htmlFor="modSign" onClick={() => this.setState({ radio: 2 })}>Moderated (you decide who get's activated after they sign up)</label>
        </p>
        <p>
          <input type="radio" id="disabledSign" checked={this.state.radio === 3} />
          <label htmlFor="disabledSign" onClick={() => this.setState({ radio: 3 })}>Disabled (sign up is not allowed)</label>
        </p>

        <hr />

        <p className="lead">
          Sign Up Form Fields
        </p>

        <div className="input-field">
          <input type="checkbox" checked={this.state.lastName}/>
          <label onClick={() => this.setState({ lastName: !this.state.lastName })}>Enable second last name</label>
        </div>

        <div className="input-field">
          <input type="checkbox" checked={this.state.avatar}/>
          <label onClick={() => this.setState({ avatar: !this.state.avatar })}>Enable user avatar</label>
        </div>

        <div className="input-field">
          <input type="checkbox" checked={this.state.birthDate}/>
          <label onClick={() => this.setState({ birthDate: !this.state.birthDate })}>Enable birth date</label>
        </div>

        <div className="input-field">
          <input type="checkbox" checked={this.state.gender}/>
          <label onClick={() => this.setState({ gender: !this.state.gender })}>Enable gender</label>
        </div>
      </div>
    );
  }
}
