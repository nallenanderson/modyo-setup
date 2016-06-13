import React, { Component } from 'react';

export default class TagModal extends Component {
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
              <h4 className="modal-title">Add tag to Nate Anderson</h4>
            </div>
            <div className="modal-body first">
              <span className="tags">Tags:</span>
              <ul className="user-targets">
                { userTags }
              </ul>
              <div className="add-tag">
                <input className="inline-input" placeholder="Add new tag..." />
                <span id="mock-cursor">|</span>
              </div>
              <div className="clear"></div>
            </div>
            <div className="modal-body second">
              <strong>Available tags</strong>
              <div className="list-group">
                { myTags }
              </div>
              <button className="white-button" data-dismiss="modal" style={{ marginBottom: 20 }}>Close</button>
            </div>
            <div className="clear"></div>
          </div>
        </div>
      </div>
    );
  }
}
