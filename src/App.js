import React, { Component } from 'react';
import ReactBootstrapMenu from './Component/reactBootstrapMenu';
import ReactBootstrapForms from './Component/reactBootstrapForm';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ReactBootstrapMenu></ReactBootstrapMenu>
        </header>
        <div className="App-img">
          <img alt='#' src={require('./beautiful.JPG')} width='650px' height='400px'></img>
        </div>
        <body className="App-body">
          <ReactBootstrapForms></ReactBootstrapForms>
        </body>
      </div>
    );
  }
}

export default App;
