import React, { Component } from 'react';

import ImportTable from './import-table';

class ImportInfo extends Component {

  render(){
    return(
      <div className="import-info">
        <h3>Import Successful!</h3>
        <p className="lead"><span className="text-green"><u>5 users</u> were created.</span><span className="text-blue"> <u>2 users</u> already exist in your database and were not created.</span><span className="text-red"> <u>5 users</u> had syntax problems.</span></p>
        <ImportTable />
      </div>
    );
  }
}

export default ImportInfo;
