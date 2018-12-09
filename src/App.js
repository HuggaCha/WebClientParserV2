import React, { Component } from 'react';
import './App.css';
import FileUploader from './Components/FileUploader';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h5>Welcome to Web Parser</h5>
        <p>Please, upload your file below: </p>
        <FileUploader />
      </div>
    );
  }
}

export default App;
