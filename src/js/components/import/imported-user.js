import React, { Component } from 'react';

class ImportedUser extends Component {

  constructor(){
    super();
    this.state = {
      checked: false
    }
  }

  checkIt(){
    if(!this.state.checked){
      this.setState({ checked: true });
    } else {
      this.setState({ checked: false });
    }
  }

  render(){
    return(
      <tr>
        <td style={{ width: 15 }}>
          <form>
            <p className="checker">
              <input type="checkbox" id={this.props.id} checked={(this.state.checked || this.props.masterCheck) || this.state.checked}/>
              <label htmlFor={this.props.id} onClick={this.checkIt.bind(this)}><span className="transparent">^</span></label>
            </p>
          </form>
        </td>
        <td>{this.props.user.first}</td>
        <td>{this.props.user.last}</td>
        <td>{this.props.user.email}</td>
        <td>{this.props.user.title}</td>
      </tr>
    );
  }
}

export default ImportedUser;
