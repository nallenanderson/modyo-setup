import React, { Component } from 'react';

export default class TagUsers extends Component {

  handleSubmit(e){
    e.preventDefault();
    this.props.addTag(this.refs.tag.value);
    this.refs.addTag.reset();
  }

  render(){

    const userTags = this.props.tags.map((tag, i) => {
      return(
        <li key={i} className="label">
          <i className="ion-pricetags"></i> {tag}
        </li>
      )
    });

    const myTags = this.props.availableTags.map( (tag, i) => {
      return <a key={i} className="list-group-item" onClick={this.props.addTag.bind(this, tag)}>{tag}</a>
    });

    return(
      <div className="modal fade tagModal" id="tagModal" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header text-center">
              <button type="button" className="close" data-dismiss="modal">&times;</button>
              <h4 className="modal-title">Add tags</h4>
            </div>
            <div className="modal-body first">
              <span className="tags">Tags:</span>
              <ul className="user-targets">
                { userTags }
              </ul>
              <form ref="addTag" className="add-tag" onSubmit={this.handleSubmit.bind(this)}>
                <input className="inline-input" ref="tag" placeholder="Add new tag..." />
                <input type="submit" hidden />
                <span id="mock-cursor">|</span>
              </form>
              <div className="clear"></div>
            </div>
            <div className="modal-body second">
              <strong>Available tags</strong>
              <div className="list-group">
                { myTags }
              </div>
              <button className="btn btn-default pull-right" data-dismiss="modal">Close</button>
            </div>
            <div className="clear"></div>
          </div>
        </div>
      </div>
    );
  }
}
