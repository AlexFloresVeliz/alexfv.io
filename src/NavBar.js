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

    let linkStyle = {
      color: '#00B5E3',
      textDecoration:'none'
    };

    {/* DESIGN HOBBY CSS*/}
    let designHobbyText = {
      float: 'left',
      maxWidth: '70%'
    }

    let designHobbyIcon = {
      float: 'right',
      fontSize: '3.5em',
      color: '#1769FF',
      marginRight: '8.4%',
      marginTop:'3%'
    }

    {/* GAMING HOBBY CSS*/}
    let gamingHobbyText = {
      float: 'left',
      maxWidth: '70%'
    }

    let gamingHobbyIconTwitch = {
      display: 'block',
      float: 'right',
      fontSize: '3.5em',
      color: '#6441A4',
      // marginRight: '7%',
      marginLeft:'5%',
      marginTop:'2%',
      // marginRight: '3%',
    }

    let gamingHobbyIconPlaystation = {
      display: 'block',
      float: 'right',
      fontSize: '3.5em',
      color: '#003791',
      marginLeft:'2%',
      marginTop:'2%'
    }

    let gamingHobbyIconSteam = {
      display: 'block',
      float: 'right',
      fontSize: '3.5em',
      color: '#2D2926',
      marginLeft:'2%',
      marginTop:'2%'
    }

    {/* FOOTBALL HOBBY CSS*/}
    let footballHobbyText = {
      float: 'left',
      maxWidth: '70%'
    }

    let footballHobbyIcon = {
      float: 'right',
      width: '7.5%',
      height: '7.5%', 
      display: 'block',
      marginRight: '8.7%'
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
          Hey! 👋 My name is Alex and I'm a Software Engineer based in NYC. I'm a former Software Engineering intern for <a href="http://gestalt.io/" style={linkStyle} target="_blank"> Gestalt Interactive</a> and <a href="https://www.target.com/" style={linkStyle} target="_blank">Target</a>. Currently, I am most interested in continuing to work on the skills in Web Development I have aquired through my internships. I am most passionate about the front end because it allows me the opportunity to exercise my passion for design too but have also worked in DevOps and Automation and find those areas interesting too.
          </p>
          <p>I first started working on my trade at Lehman College where I pursued a Bachelors of Science in Computer Science. While at Lehman, I was also the Communications Chair, Vice President, and President of the <a href="http://nsbe.org/home.aspx" style={linkStyle} target="_blank">National Society of Black Engineers (NSBE)</a> chapter at Lehman College and was an organizer for the <a href= "http://bit.ly/NSHack17" style={linkStyle} target="_blank">2017</a> and 2018 NS Hackathons during my 6 semesters with the organization.</p>
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
            <img data-caption="javascript" src="img/design/Ill_Badge.png"/>
          </div>
          </Modal>
        </span> 
        <span>

        {/* CONTACT MODAL */}
          <a onClick={this.showModal3} style={contactStyle}>Contact</a>
          <Modal open={this.state.modal3} onClose={this.onCloseModal} little>
          <h1> CONTACT ME 📟 </h1>
          <p>Feel free to shoot an email to me via email at <a href="mailto:hi@alexfv.io" style={linkStyle}>hi@alexfv.io</a> if you'd ever like to reach me. You can also find out what I am currently working ON or currently working FOR on my <a href="https://www.linkedin.com/in/alexfloresveliz/" style={linkStyle} target="_blank"> LinkedIn</a> profile. I also like to freelance in my spare time, so if you'd like to discuss a project, let me know.</p>
          <p>I also do and have done pro-bono work, so if you have a cause or know of one that you think would interest me and they would like a dev or designer, hit me up!</p>
          <p>I am always available for coffee as well, if you just want to chat. I'm always available for coffee.</p>
          </Modal>
        </span>
        <span>

        {/* HOBBY MODAL */}
          <a onClick={this.showModal4} style={interestingStyle}>Hobbies</a>
          <Modal open={this.state.modal4} onClose={this.onCloseModal} little>
          <h1> HOBBIES 👾 </h1>

          {/* DESIGN HOBBY */}
          <p style={designHobbyText}>I'm from the <a href="https://www.nycgo.com/boroughs-neighborhoods/the-bronx" style={linkStyle} target="_blank">X</a>, so naturally I grew up with a strong appreciation for art thanks to the abundance of it found across the borough. I've been designing as a hobby for the last 4 years and have learned how to create and edit graphics through Photoshop and Illustrator and can create interactive mockup designs using Adobe XD. You can check out some of my work on Behance!</p>
          {/* LINKS */}
          <a href="https://www.behance.net/alexfloresveliz" target="_blank" rel="noopener noreferrer" style={designHobbyIcon}><i class="fab fa-behance" aria-hidden="true" id="nav-link"></i></a>

          {/* Gaming HOBBY */}
          <p style={gamingHobbyText}>I go by SolicitedCoyote on most video game platforms. Been on the Battle Royale style game hype train lately but I'm also into FIFA. I also like to stream what I'm playing on Twitch from time to time for fun. Connect with me so we can play! Or follow me on Twitch so you can see me get carried 😅</p>
          {/* LINKS */}
          <a href="https://steamcommunity.com/id/SolicitedCoyote/" target="_blank" rel="noopener noreferrer" style={gamingHobbyIconSteam}><i class="fab fa-steam" aria-hidden="true" id="nav-link"></i></a>
          <a href="https://my.playstation.com/profile/SolicitedCoyote" target="_blank" rel="noopener noreferrer" style={gamingHobbyIconPlaystation}><i class="fab fa-playstation" aria-hidden="true" id="nav-link"></i></a>
          <a href="https://www.twitch.tv/solicitedcoyote" target="_blank" rel="noopener noreferrer" style={gamingHobbyIconTwitch}><i class="fab fa-twitch" aria-hidden="true" id="nav-link"></i></a>

          {/* FOOTBALL HOBBY */}
          <p style={footballHobbyText}>I'm a really huge football fan! I like sports in general and try to keep up with NY sports when they're not all being depressingly bad but most of my weekend mornings are spent watching football. I am a huge Real Madrid fan! Hala Madrid!</p>
          {/* LINKS */}
          <img data-caption="real-madrid" style={footballHobbyIcon} src="img/Real_Madrid_logo.png"/>
          </Modal>
        </span>
        </div>
      </nav>
    )
  }
}

export default NavBar;
