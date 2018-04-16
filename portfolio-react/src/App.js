import React, { Component } from 'react';
import './App.css';

class NavBar extends Component {
  render() {
    return (
      <nav>
        <div className="nav">
          <a href="#hello">Link 1</a>
          <a href="#mellow">Link 2</a>
          <a href="#yellow">Link 3</a>
          <a href="#fellow">Link 4</a>
        </div>
      </nav>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Alex F-V</h1>
          <NavBar />
        </header>
      </div>
    );
  }
}

export default App;
