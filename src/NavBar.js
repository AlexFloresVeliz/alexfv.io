import React, { Component } from 'react';
import './App.css';
import Modal from "react-responsive-modal";

class NavBar extends Component {

  state = {
    modal1: false,
    modal2: false,
    modal3: false,
    modal4: false
  }

  onCloseModal = () => {
    this.setState({ modal1: false, modal2: false, modal3: false, modal4: false })
  }

  showModal1 = () => {
    this.setState({ modal1: true, modal2: false, modal3: false, modal4: false })
  }
  showModal2 = () => {
    this.setState({ modal1: false, modal2: true, modal3: false, modal4: false })
  }

  showModal3 = () => {
    this.setState({ modal1: false, modal2: false, modal3: true, modal4: false })
  }
  showModal4 = () => {
    this.setState({ modal1: false, modal2: false, modal3: false, modal4: true })
  }

  render() {
    const { modal1, modal2, modal3, modal4 } = this.state;

    {/* STYLING */}
    let bioStyle = {
      color:'#FD17FF'
    };

    let techStyle = {
      color:'#00B5E3'
    };

    let contactStyle = {
      color:'#FAFF7F'
    };

    let interestingStyle = {
      color:'#FF5154'
    };

    let illStyle = {
      fill:'#FF7C00'
    };

    let linkStyle = {
      color: '#00B5E3',
      textDecoration:'none'
    };

    {/* DESIGN HOBBY CSS*/}
    let designHobbyText = {
      float: 'left',
      maxWidth: '75%'
    }

    let designHobbyIcon = {
      float: 'right',
      fontSize: '3.5em',
      color: '#1769FF',
      marginRight: '7%',
      marginTop:'2%'
    }

    {/* GAMING HOBBY CSS*/}
    let gamingHobbyText = {
      float: 'left',
      maxWidth: '75%'
    }

    let gamingHobbyIconTwitch = {
      display: 'block',
      // marginLeft: 'auto',
      // marginRight: 'auto',
      float: 'right',
      fontSize: '3.5em',
      color: '#6441A4',
      // marginRight: '7%',
      marginLeft:'1%',
      marginTop:'2%'
    }

    let gamingHobbyIconPlaystation = {
      display: 'block',
      float: 'right',
      fontSize: '3.5em',
      color: '#003791',
      marginLeft:'1%',
      marginTop:'2%'
    }

    let gamingHobbyIconSteam = {
      display: 'block',
      float: 'right',
      fontSize: '3.5em',
      color: '#2D2926',
      marginLeft:'1%',
      marginTop:'2%'
    }

    return (
      <nav>
        <div className="nav">
        <span>
        {/* BIO MODAL */}
          <a onClick={this.showModal1} style={bioStyle}>Bio</a>
          <Modal open={this.state.modal1} onClose={this.onCloseModal} little>
          <h1> BIO 🐺 </h1>
          <img className="profile-pic" data-caption="Me" src="img/me.png"/>
          <p>
          Hey! 👋 My name is Alex and I'm a Software Engineer based in NYC, former Software Engineering intern for <a href="http://gestalt.io/" style={linkStyle} target="_blank"> Gestalt Interactive</a> and <a href="https://www.target.com/" style={linkStyle} target="_blank">Target</a> and incoming Software Engineer for <a href="https://www.americanexpress.com" style={linkStyle} target="_blank"> American Express</a>.
          </p>
          <p>I am a former President of the <a href="http://nsbe.org/home.aspx" style={linkStyle} target="_blank">National Society of Black Engineers (NSBE)</a> chapter at Lehman College and a former organizer for the <a href= "http://bit.ly/NSHack17" style={linkStyle} target="_blank">2017</a> and 2018 NS Hackathons. 
          </p>
          </Modal>
        </span>  
        <span>
        {/* TECH MODAL */}
          <a onClick={this.showModal2} style={techStyle}>Tech</a>
          <Modal open={this.state.modal2} onClose={this.onCloseModal} little>
          <h1> TECH I USE 👨‍💻</h1>
          <h3>ENGINEERING ⚒</h3>
          <div class="flex-container">
            <img data-caption="html" src="img/dev/HTML5_Badge.svg"/>
            <img data-caption="css" src="img/dev/CSS3_Badge.png"/>
            <img data-caption="javascript" src="img/dev/ES6_Badge.png"/>
            <img data-caption="react" src="img/dev/react_badge.png"/>
            <img data-caption="java" src="img/dev/java_logo.png"/>
            <img data-caption="postgreSQL" src="img/dev/PostgreSQL_Badge.png"/>
            <img data-caption="git" src="img/dev/Git_Badge.png"/>
          </div>
          <h3>DESIGNING 🎨</h3>
          <div class="flex-container">
            <img data-caption="html" src="img/design/PS_Badge.png"/>
            <img data-caption="css" src="img/design/XD_Badge.png"/>
            <img data-caption="javascript" style={illStyle} src="img/design/Ill_Badge.png"/>
          </div>
          </Modal>
        </span> 
        <span>
        {/* CONTACT MODAL */}
          <a onClick={this.showModal3} style={contactStyle}>Contact</a>
          <Modal open={this.state.modal3} onClose={this.onCloseModal} little>
          <h1> CONTACT ME </h1>
          <p>Feel free to shoot an email to me via email at <a href="mailto:hi@alexfv.io">hi@alexfv.io</a> if you'd ever like to reach me. You can also find out what I am currently working ON or currently working FOR on my <a href="https://www.linkedin.com/in/alexfloresveliz/" target="_blank"> LinkedIn</a> profile. I also like to freelance in my spare time, so if you'd like to discuss a project, let me know.</p>
          <p>I also do and have done pro-bono work, so if you have a cause or know of one that you think would interest me and they would like a dev or designer, hit me up!</p>
          <p>I am always available for coffee as well, if you just want to chat. I'm always available for coffee.</p>
          </Modal>
        </span>
        <span>
        {/* INTERESTING MODAL */}
          <a onClick={this.showModal4} style={interestingStyle}>Hobbies</a>
          <Modal open={this.state.modal4} onClose={this.onCloseModal} little>
          <h1> Hobbies </h1>
          {/*DESIGN HOBBY*/}
          <p style={designHobbyText}>I'm from the <a href="https://www.nycgo.com/boroughs-neighborhoods/the-bronx" style={linkStyle} target="_blank">X</a>, so naturally I grew up with a strong appreciation and love for art. BLAH BLAH BLAH so naturally I grew up with a strong appreciation and love for art. BLAH BLAH BLAH.so naturally I grew up with a strong appreciation and love for art. BLAH BLAH BLAH.</p>
          <a href="https://www.behance.net/alexfloresveliz" target="_blank" rel="noopener noreferrer" style={designHobbyIcon}><i class="fab fa-behance" aria-hidden="true" id="nav-link"></i></a>
          {/*Gaming HOBBY*/}
          <p style={gamingHobbyText}>I'm from the <a href="https://www.nycgo.com/boroughs-neighborhoods/the-bronx" style={linkStyle} target="_blank">X</a>, so naturally I grew up with a strong appreciation and love for art. BLAH BLAH BLAH so naturally I grew up with a strong appreciation and love for art. BLAH BLAH BLAH.so naturally I grew up with a strong appreciation and love for art. BLAH BLAH BLAH.</p>
          <a href="https://steamcommunity.com/id/SolicitedCoyote/" target="_blank" rel="noopener noreferrer" style={gamingHobbyIconSteam}><i class="fab fa-steam" aria-hidden="true" id="nav-link"></i></a>
          <a href="https://my.playstation.com/profile/SolicitedCoyote" target="_blank" rel="noopener noreferrer" style={gamingHobbyIconPlaystation}><i class="fab fa-playstation" aria-hidden="true" id="nav-link"></i></a>
          <a href="https://www.twitch.tv/solicitedcoyote" target="_blank" rel="noopener noreferrer" style={gamingHobbyIconTwitch}><i class="fab fa-twitch" aria-hidden="true" id="nav-link"></i></a>
          </Modal>
        </span>
        </div>
      </nav>
    )
  }
}

export default NavBar;
