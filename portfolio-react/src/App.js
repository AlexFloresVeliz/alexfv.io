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

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="footer">
          <a href="https://www.linkedin.com/in/alexfloresveliz/" target="_blank"><i class="fa fa-linkedin" aria-hidden="true" id="nav-link"></i></a>
          <a href="https://github.com/AlexFloresVeliz" target="_blank"><i class="fa fa-github-alt" aria-hidden="true" id="nav-link"></i></a>
          <a href="https://www.behance.net/alexfloresveliz" target="_blank"><i class="fa fa-behance" aria-hidden="true" id="nav-link"></i></a>
          <a href="mailto:hi@alexfv.io"><i class="fa fa-envelope-o" aria-hidden="true" id="nav-link"></i></a>
        </div>
      </footer>
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
          <Footer />
        </header>
      </div>
    );
  }
}

export default App;
