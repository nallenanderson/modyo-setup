import React, { Component } from 'react';
import { Link } from 'react-router';

import MainMenu from '../main-menu';
import Content from '../content';
import ImportInfo from './import-info';

export default class Import extends Component {

  constructor(){
    super();
    this.state = {
      divToShow: null,
      hideFirst: null,
      results: null
    }
  }

  removeFirst(msg){
    this.setState({ divToShow: msg})
    this.setState({ hideFirst: true });
  }

  import(){
    this.setState({ divToShow: null });
    this.setState({ results: true });
  }

  render(){

    let showDiv;

    if(this.state.divToShow === 'csv'){
      showDiv = <div className="default-box padding-all">
        <h4>Import CSV File</h4>
        <div className="form-box">
          <p>Drag and drop your CSV file here.</p>
          <div className="file-field input-field">
            <a>
              Or select a file from your computer...
              <input type="file" />
            </a>
          </div>

          <p>Your CSV file must constain at least a first name and email address. You can also map your custom created fields to columns in your CSV file.</p>
          <button className="btn btn-primary" onClick={this.import.bind(this)}>Import</button>
        </div>
      </div>;
    } else if (this.state.divToShow === 'list'){
      showDiv = <div className="default-box padding-all">
        <h4>Import Manual List</h4>
        <form className="form-box">
          <textarea placeholder="Paste list here with each record on its own line." />
          <p>Each record must constain at least a first name and email address. You can also map your custom created fields to columns in your CSV file.</p>
          <button className="btn btn-primary" onClick={this.import.bind(this)}>Import</button>
        </form>
      </div>
    }

    let showResults;

    if(this.state.results){
      showResults = <div className="default-box padding-all">
        <ImportInfo />
      </div>
    }

    return(
      <div>
        <MainMenu />
        <div id="main">
          <div id="page-context">
            <div id="page-context-header">
              <h1>Import</h1>
            </div>
          </div>
          <div id="content-wrapper">
            <div id="content" className="padding-all">
              <div className={!this.state.hideFirst ? "default-box" : "hidden"} >
                <div className="padding-all">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="">
                        <h4>Import from CSV</h4>
                        <br />
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <button className="btn btn-primary" onClick={this.removeFirst.bind(this, 'csv')}>Import CSV</button>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="">
                        <h4>Import from List</h4>
                        <br />
                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.</p>
                        <button className="btn btn-primary" onClick={this.removeFirst.bind(this, 'list')}>Import List</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {showDiv}
              {showResults}
              <div id="footer">
                <Link to="/">
                  <button className="btn btn-default pull-right">
                    Save
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
