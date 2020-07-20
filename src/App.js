import React, { Component } from 'react';
import './App.css';

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="footer">
          <a href="https://www.linkedin.com/in/alexfloresveliz/" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin" aria-hidden="true" id="nav-link"></i></a>
          <a href="https://github.com/AlexFloresVeliz" target="_blank" rel="noopener noreferrer"><i class="fab fa-github-alt" aria-hidden="true" id="nav-link"></i></a>
          <a href="https://www.behance.net/alexfloresveliz" target="_blank" rel="noopener noreferrer"><i class="fab fa-behance" aria-hidden="true" id="nav-link"></i></a>
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
          <p className="App-sub">As of Jul 2020, this site is under remodeling. Come back another time or check me out on my socials down below :)</p>
          <Footer />
        </header>
      </div>
    );
  }
}

export default App;
