import React, { Component } from 'react';
import './App.css';

class NavBar extends Component {
  render() {
    return (
      <nav>
        <div className="nav">
          <a href="#hello">Hello</a>
          <a href="#mellow">Mellow</a>
          <a href="#yellow">Yellow</a>
          <a href="#fellow">Fellow</a>
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
