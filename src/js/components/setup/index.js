import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import Content from '../content';

export default class Setup extends Component {

  render(){
    return <Content />
  }

}

// function mapStateToProps(state){
//   return { tasks: state.tasks }
// }
//
// export default connect(mapStateToProps)(Setup);
