import React, { Component } from 'react';
import { Link } from 'react-router';

import MainMenu from '../main-menu';
import Selector from './selector';
import { comunas, roles } from '../../data';

export default class Teams extends Component {

  constructor(){
    super();
    this.state = {
      admin: false,
      email: false
    }
  }

  setAdmin(){
    if(this.state.admin){
      this.setState({ admin: false });
    } else {
      this.setState({ admin: true });
    }
  }

  setEmail(){
    if(this.state.email){
      this.setState({ email: false });
    } else {
      this.setState({ email: true });
    }
  }


  render(){
    return(
      <div>
        <div id="main" className={!this.props.showMenu ? "" : "showMenu"}>
          <div id="page-context">
            <div id="page-context-header">
              <h1>
                <button className="outer" onClick={this.props.openMenu} >
                  <span id="nav-toggle" className={!this.props.showMenu ? "" : "active"}>
                    <span></span>
                  </span>
                </button>
                Create user
              </h1>
            </div>
          </div>
          <div id="content-wrapper">
            <div id="content" className="padding-all">
              <div className="default-box full-actions">
                <div className="row">
                  <div className="col-md-7 border-right">
                    <div className="padding-all now">
                      <div className="input-field">
                        <input className="form-control" type="text" id="name" />
                        <label htmlFor="name">First name</label>
                      </div>
                      <div className="input-field">
                        <input className="form-control" type="text" id="last" />
                        <label htmlFor="last">Last name</label>
                      </div>
                      <div className="input-field">
                        <input className="form-control" type="email" id="email" />
                        <label htmlFor="email">Email</label>
                      </div>
                      <div className="input-field">
                        <input className="form-control" type="text" id="title" />
                        <label htmlFor="title">Job title</label>
                      </div>
                      <div className="input-field">
                        <input className="form-control" type="text" id="rut" />
                        <label htmlFor="rut">RUT</label>
                      </div>
                      <div className="input-field">
                        <input className="form-control" type="password" id="password" />
                        <label htmlFor="password">Password</label>
                      </div>
                      <div className="input-field">
                        <input className="form-control" type="password" id="passwordConf" />
                        <label htmlFor="passwordConf">Confirm password</label>
                      </div>
                      <div className="input-field">
                        <input type="checkbox" checked={this.state.email}/>
                        <label onClick={this.setEmail.bind(this)}>Send activation email and password</label>
                      </div>
                    </div>

                  </div>
                  <div className="col-md-5">
                    <div className="padding-all">
                      <p className="lead">Admin options</p>
                      <div className="selectors">
                        <div className="input-field">
                          <input type="checkbox" checked={this.state.admin}/>
                          <label onClick={this.setAdmin.bind(this)}>Set as teammate</label>
                        </div>
                        <Selector disabled={this.state.admin} options={roles} title="Select user roles"/>
                        <Selector disabled={this.state.admin} options={comunas} title="Select channels/targets"/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="footer">
                <Link to="/">
                  <button className="btn btn-default pull-right">
                    Save
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
