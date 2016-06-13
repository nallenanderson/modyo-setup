import React, { Component } from 'react';
import { Link } from 'react-router';

export default class MainMenu extends Component {
  render(){
    return(
      <div id="main-menu">
        <div className="nav-brand"></div>
        <div class="nav-account">
          <div className="account-dropdown dropdown">
            <Link to="/" className="account-dropdown-btn">
              Modyo Cloud
            </Link>
          </div>
        </div>
        <nav id="nav">
          <div className="mm-menu">
            <a className="mm-title">{this.props.title}</a>
          </div>
          <ul className="mm-listview">
            <li className="mm-selected">
              <Link to="/import"> Import</Link>
            </li>
            <li class="">
              <Link to="/"> Organize</Link>
            </li>
            <li class="">
              <Link to="/"> Interact</Link>
            </li>
            <li class="">
              <Link to='/'> Analyze </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
