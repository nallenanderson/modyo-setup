import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

import MainMenu from './main-menu';
import { taskData } from '../data';

class App extends Component {

  render(){
    return(
      <div>
        <MainMenu title="Modyo" />
        {this.props.children}
      </div>
    );
  }
}

function mapStateToProps(state){
  return { tasks: state.tasks }
};

export default connect(mapStateToProps)(App);
