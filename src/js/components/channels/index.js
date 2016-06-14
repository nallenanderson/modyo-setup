import React, { Component } from 'react';
import update from 'react-addons-update';
import { Link } from 'react-router';

import MainMenu from '../main-menu';
import Channel from './channel';
import ChannelModal from './channel-modal';
import { channels, comunas } from '../../data';

export default class Channels extends Component {

  constructor(props){
    super(props);
    this.state = {
      channel: null
    }

    this.channels = channels;
  }

  removeUser(channelId, userIndex){
    if(confirm("Are you sure that you want to remove your teammate from this channel?")){
      this.channels[channelId].people.splice(userIndex, 1);
      this.channels;
      this.forceUpdate();
    }
  }

  render(){

    let channelDiv;

    const channelList = this.channels.map((channel, i) => {
      return <a className="list-group-item" key={i} onClick={() => this.setState({ channel })}>{channel.title} <label className="badge">{channel.people.length}</label></a>
    });

    if(!this.state.channel){
      channelDiv = <p className="lead">Use channels to connect your customers with your team. You can assign your teammates to various channels so that they can respond to the people that need them most.</p>;
    } else {
      channelDiv = <Channel channel={ this.state.channel } removeUser={this.removeUser.bind(this)} />
    }

    return(
      <div>
        <MainMenu />
        <div id="main">
          <div id="page-context">
            <div id="page-context-header">
              <h1>Channels</h1>
            </div>
          </div>
          <div id="content-wrapper">
            <div id="content" className="padding-all">
              <div className="default-box col-md-3 full-action">
                <div className="channel-box">
                  <ul className="list-group">
                    {channelList}
                  </ul>
                  <button className="btn btn-primary channel-button" data-toggle="modal" data-target="#channelModal"><i className="ion-plus-round"></i> New Channel</button>
                </div>
              </div>
              <div className="default-box col-md-9 full-action">
                <div className="padding-all">
                  {channelDiv}
                </div>
              </div>
              <ChannelModal />
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
