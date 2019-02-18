import React, { Component } from 'react';
import ReactBootstrapMenu from './Component/reactBootstrapMenu';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ReactBootstrapMenu></ReactBootstrapMenu>
        </header>
        <body className="App-body">

        </body>
      </div>
    );
  }
}

export default App;
