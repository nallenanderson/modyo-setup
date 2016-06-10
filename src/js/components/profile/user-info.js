import React, { Component } from 'react';

import { tags, targets, details } from '../../data';

export default class UserInfo extends Component {

  constructor(){
    super();
    this.state = {
      tags: []
    };
  }

  handleDelete(tag){
    console.log(tag)
    if(confirm("Are you sure you want to remove this tag?")){
      delete this.state.tags[tag];
      this.setState({
        tags: this.state.tags
      });
    }
  }

  componentWillMount(){
    this.setState({ tags });
  }

  render(){

    const userTags = this.state.tags.map((tag, i) => {
      return(
        <li key={i} className="label">
          <i className="ion-pricetags"></i> {tag} <i onClick={this.handleDelete.bind(this, i)} className="ion-close-circled"></i>
        </li>
      )
    });

    const userTargets = targets.map(target => {
      return(
        <li className="label" key={target}>
          <i className="ion-pie-graph"></i> { target }
        </li>
      );
    });

    const userDetails = details.map((detail, i) => {
      return(
        <span key={i}>
          <dt>{detail.val1} </dt>
          <dd>{detail.val2}</dd>
          <br />
        </span>
      );
    })

    return(
      <div className="user-details padding-all">
        <h4>Tags</h4>
        <ul className="user-targets">
          <li className="label green"><i className="ion-plus-round"></i> Add Tag</li>
          { userTags }
        </ul>
        <div className="clear"></div>

        <h4>Targets</h4>
        <ul className="user-targets">
          { userTargets }
        </ul>
        <div className="clear"></div>


        <h4>User Details</h4>
        <dl>
          { userDetails }
        </dl>
      </div>
    );
  }
}
