import React, { Component } from 'react';

import MainMenu from '../main-menu';
import Content from '../content';
import Channel from './channel';
import { channels } from '../../data';

export default class Channels extends Component {

  constructor(){
    super();
    this.state = {
      channel: null
    }
  }

  setChannel(){
    this.setState({ });
  }

  render(){

    let channelDiv;

    const channelList = channels.map((channel, i) => {
      return <a className="list-group-item" key={i} onClick={() => this.setState({ channel: channel })}>{channel.title} <label className="badge">{channel.people}</label></a>
    });

    if(!this.state.channel){
      channelDiv = <p className="lead">Use channels to connect your customers with your team. You can assign your teammates to various channels so that they can respond to the people that need them most.</p>;
    } else {
      channelDiv = <Channel channel={this.state.channel} />
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
              <div className="default-box col-md-3">
                <div className="channel-box">
                  <h4>Channels</h4>
                  <ul className="list-group">
                    {channelList}
                  </ul>
                  <button className="btn btn-default channel-button"><i className="ion-plus-round"></i> New Channel</button>
                </div>
              </div>
              <div className="default-box col-md-9">
                <div className="padding-all">
                  {channelDiv}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
