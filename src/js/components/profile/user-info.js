import React, { Component } from 'react';
import { connect } from 'react-redux';

import { availableTags, targets, details } from '../../data';
import * as actions from '../../actions';
import TagModal from '../tag-modal';

class UserInfo extends Component {

  handleDelete(tag){
    if(confirm("Are you sure you want to remove this tag?")){
      var newTags = this.props.tags;
      newTags.splice(tag, 1);
      this.props.deleteTags(newTags);
    }
    this.forceUpdate();
  }

  addTag(tag){
    const newTags = this.props.tags;
    newTags.push(tag);
    this.props.addTags(newTags);
    availableTags.splice(tag, 1);
    this.forceUpdate();
  }

  render(){
    const userTags = this.props.tags.map((tag, i) => {
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
          <li className="label" data-toggle="modal" data-target="#tagModal"><i className="ion-plus-round"></i> Add Tag</li>
          { userTags }
        </ul>
        <div className="clear"></div>

        <h4>Targets</h4>
        <ul className="user-targets">
          { userTargets }
        </ul>

        <TagModal tags={this.props.tags} addTag={this.addTag.bind(this)} availableTags={availableTags} />
        <div className="clear"></div>

        <h4>User Details</h4>
        <dl>
          { userDetails }
        </dl>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { tags: state.tags }
}

export default connect(mapStateToProps, actions)(UserInfo);
