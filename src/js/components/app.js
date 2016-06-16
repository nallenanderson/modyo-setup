import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

import MainMenu from './main-menu';
import { taskData } from '../data';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      showMenu: false
    }
  }

  openMenu(){
    console.log("Hello there...");
    this.setState({ showMenu: !this.state.showMenu });
  }

  render(){

    return(
      <div>
        <MainMenu title="Modyo" showMenu={this.state.showMenu} />
        {React.cloneElement(this.props.children, { openMenu: this.openMenu.bind(this), showMenu: this.state.showMenu })}
      </div>
    );
  }
}

function mapStateToProps(state){
  return { tasks: state.tasks }
};

export default connect(mapStateToProps)(App);
