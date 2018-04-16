import React, { Component } from 'react';
import './App.css';

class NavBar extends Component {
  render() {
    return (
      <nav>
        <ul className="nav">
          <li><a className="navItem" href="#">Link</a></li>
          <li><a className="navItem" href="#">Link</a></li>
          <li><a className="navItem" href="#">Link</a></li>
        </ul>
      </nav>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Alex Flores-Veliz</h1>
          <p className="App-intro">Hello World</p>
          <NavBar />
        </header>
      </div>
    );
  }
}

export default App;
