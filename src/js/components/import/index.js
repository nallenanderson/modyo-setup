import React, { Component } from 'react';

import MainMenu from '../main-menu';
import Content from '../content';

export default class Import extends Component {

  constructor(){
    super();
    this.state = {
      divToShow: null
    }
  }

  showCSV(){
    console.log("CSV");
  }

  showList(){
    console.log("Hi");
  }
  render(){

    let showDiv;

    if(this.state.divToShow === 'csv'){
      showDiv = <div className="default-box padding-all" style={{marginTop: 15}}>
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
          <button className="btn btn-primary">Import</button>
        </div>
      </div>;
    } else if (this.state.divToShow === 'list'){
      showDiv = <div className="default-box padding-all" style={{marginTop: 15}}>
        <h4>Import Manual List</h4>
        <form className="form-box">
          <textarea placeholder="Paste list here with each record on its own line." />
          <p>Each record must constain at least a first name and email address. You can also map your custom created fields to columns in your CSV file.</p>
          <button className="btn btn-primary">Import</button>
        </form>
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
              <div className="default-box">
                <div className="padding-all">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="">
                        <h4>Import from CSV</h4>
                        <br />
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <button className="btn btn-default" onClick={() => this.setState({ divToShow: 'csv'})}>Import CSV</button>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="">
                        <h4>Import from List</h4>
                        <br />
                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.</p>
                        <button className="btn btn-default" onClick={() => this.setState({ divToShow: 'list'})}>Import List</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {showDiv}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
