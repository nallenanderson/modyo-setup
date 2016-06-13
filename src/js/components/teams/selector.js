import React, { Component } from 'react';
import Select from 'react-select';

export default class Selector extends Component {
  constructor(props){
    super(props);
    this.state = {
      disabled: false,
      options: this.props.options,
      value: []
    }
  }

  handleSelectChange(value){
  	console.log('You\'ve selected:', value);
  	this.setState({ value });
  }

  toggleDisabled (e) {
		this.setState({ disabled: e.target.checked });
	}

  render () {
		return (
			<div className="section">
				<h3 className="section-heading">{this.props.label}</h3>
        <label>{this.props.title}</label>
				<Select multi simpleValue disabled={!this.props.disabled} value={this.state.value} placeholder="Assign to channels/targets" options={this.state.options} onChange={this.handleSelectChange.bind(this)} />


				<div className="checkbox-list">

					<label className="checkbox">
						<input type="checkbox" className="checkbox-control" checked={this.state.disabled} onChange={this.toggleDisabled.bind(this)} />
					</label>
				</div>
			</div>
		);
	}
}
