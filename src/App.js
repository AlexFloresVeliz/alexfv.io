import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar'

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="footer">
          {/* LinkedIn Link */}
          <a href="https://www.linkedin.com/in/alexfloresveliz/" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin" aria-hidden="true" id="nav-link"></i></a>
          {/* GitHub Link */}
          <a href="https://github.com/AlexFloresVeliz" target="_blank" rel="noopener noreferrer"><i class="fab fa-github-alt" aria-hidden="true" id="nav-link"></i></a>
          {/* Behance Link */}
          <a href="https://www.behance.net/alexfloresveliz" target="_blank" rel="noopener noreferrer"><i class="fab fa-behance" aria-hidden="true" id="nav-link"></i></a>
          {/* Twitter Link */}
          <a href="https://twitter.com/AlexFVeliz" target="_blank" rel="noopener noreferrer"><i class="fab fa-twitter" aria-hidden="true" id="nav-link"></i></a>
          {/* Email Link */}
          <a href="mailto:hi@alexfv.io"><i class="far fa-envelope" aria-hidden="true" id="nav-link"></i></a>
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
          <h1 className="App-title">A L E X F-V</h1>
          <NavBar />
          <Footer />
        </header>
      </div>
    );
  }
}

export default App;
