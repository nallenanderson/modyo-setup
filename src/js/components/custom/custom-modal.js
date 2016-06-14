import React, { Component } from 'react';

export default class CustomModal extends Component {

  constructor(props){
    super(props);
    this.state = {
      unique: false,
      required: false,
      visible: false,
      editable: false
    }
  }

  handleSubmit(e){
    e.preventDefault();
    const field = {
      title: this.refs.title.value,
      desc: this.refs.desc.value,
      type: this.refs.type.value,
      status: 'Inactive'
    }

    this.props.addField(field);
    this.refs.customForm.reset();
    $('#customModal').modal('hide');
  }

  render(){
    return(
      <div className="modal fade customModal" id="customModal" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header text-center">
              <button type="button" className="close" data-dismiss="modal">&times;</button>
              <h4 className="modal-title">Create custom field</h4>
            </div>
            <div className="modal-body">
              <form ref="customForm" onSubmit={this.handleSubmit.bind(this)}>
                <div className="input-field">
                  <input className="form-control" ref="title" type="text" id="title" />
                  <label htmlFor="title">Field name</label>
                </div>
                <div className="input-field">
                  <input className="form-control" ref="desc" type="text" id="desc" />
                  <label htmlFor="desc">Description</label>
                </div>
                <div className="input-field">
                  <input className="form-control" ref="type" type="text" id="type" />
                  <label htmlFor="type">Field type</label>
                </div>
                <div className="input-field">
                  <input type="checkbox" checked={this.state.unique}/>
                  <label onClick={() => this.setState({ unique: !this.state.unique })}>Unique</label>
                </div>
                <div className="input-field">
                  <input type="checkbox" checked={this.state.required}/>
                  <label onClick={() => this.setState({ required: !this.state.required })}>Required</label>
                </div>
                <div className="input-field">
                  <input type="checkbox" checked={this.state.visible}/>
                  <label onClick={() => this.setState({ visible: !this.state.visible })}>Visible</label>
                </div>
                <div className="input-field">
                  <input type="checkbox" disabled={!this.state.visible} checked={this.state.editable}/>
                  <label className={!this.state.visible? "no-click" : ""} onClick={() => this.setState({ editable: !this.state.editable })}>Editable</label>
                </div>
                <button type="submit" className="btn btn-default pull-right">Create</button>
              </form>
            </div>
            <div className="clear"></div>
          </div>
        </div>
      </div>
    );
  }
}
