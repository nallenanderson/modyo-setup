import React, { Component } from 'react';
import { Link } from 'react-router';

import ImportedUser from './imported-user';
import TagUsers from './tag-users';
import { availableTags, importedUsers } from '../../data';

class ImportTable extends Component {

  constructor(){
    super();
    this.state = {
      masterCheck: false
    }

    this.userTags = [];
    this.availableTags = availableTags;
  }

  checkIt(){
    if(!this.state.masterCheck){
      this.setState({ masterCheck: true });
    } else {
      this.setState({ masterCheck: false });
    }
  }

  addTag(tag){
    this.userTags.push(tag);
    if(this.availableTags.indexOf(tag) > -1){
      let ind = this.availableTags.indexOf(tag);
      this.availableTags.splice(ind, 1);
    }
    this.forceUpdate();
  }

  render(){

    const userList = importedUsers.map((user, i) => {
      return <ImportedUser user={user} key={i} id={i} masterCheck={this.state.masterCheck} />
    });

    const tagList = this.availableTags;

    return(
      <div>
        <table className="table">
          <thead className="thead-default">
            <tr>
              <th style={{ width: 15 }}>
                <form>
                  <p className="checker">
                    <input type="checkbox" id={this.props.id} checked={this.state.masterCheck}/>
                    <label htmlFor={this.props.id} onClick={this.checkIt.bind(this)}><span className="transparent">^</span></label>
                  </p>
                </form>
              </th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Title</th>
            </tr>
          </thead>
          <tbody>
            {userList}
          </tbody>
        </table>
        <button className="btn btn-primary" data-toggle="modal" data-target="#tagModal">Tag Users</button>
        <TagUsers availableTags={tagList} tags={this.userTags} addTag={this.addTag.bind(this)} />
        <div className="clear"></div>
      </div>
    );
  }
}

export default ImportTable;
