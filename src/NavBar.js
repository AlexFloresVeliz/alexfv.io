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
    return (
      <nav>
        <div className="nav">
        <span>
          <a href="#hello" onClick={this.showModal1}>Bio</a>
          <Modal open={this.state.modal1} onClose={this.onCloseModal} little>
          <h1> BIO 👨‍💻 </h1>
          <img className="profile-pic" data-caption="Me" src="img/me.png"/>
          <p>Hey! 👋 Welcome to my website! My name is Alex Flores-Veliz and I am an aspiring Software Engineer looking to grow my technical and personal skills at an organization where my design skills and familiarity with software development can be applied to help the organization reach its goals. My career goal is to become an engineer, but I still love to work on designing as a hobby. I am proficient in producing and editing computer graphics through Adobe PhotoShop, creating logos and other vector graphics in Adobe Illustrator, and can create interactive prototypes of iOS/Android and web applications using Adobe XD.</p>
          <p>I'm a 3rd year Computer Science student at CUNY Lehman College, the current President of the National Society of Black Engineers chapter at Lehman College and one of the organizers of the <a href= "http://bit.ly/NSHack17" target="_blank">2017 and 2018 NS Hackathon</a>. I interned for a software consulting company named<a href="http://gestalt.io/" target="_blank"> Gestalt Interactive</a> in NY as a Software Development Intern during the summer of 2017 where I worked on designing and implementing designs I created using Photoshop with HTML, CSS and Javascript. Want to learn more? Contact me!</p>
          </Modal>
        </span>  
        <span>
          <a href="#yellow" onClick={this.showModal2}>Tech</a>
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
            <img data-caption="linux-shell-scripting" src="img/dev/Terminal_Badge.png"/>
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
          <a href="#mellow" onClick={this.showModal3}>Contact</a>
          <Modal open={this.state.modal3} onClose={this.onCloseModal} little>
          <h1> CONTACT ME </h1>
          <p>Feel free to shoot an email to me via email at <a href="mailto:hi@alexfv.io">hi@alexfv.io</a> if you'd ever like to reach me. You can also find out what I am currently working ON or currently working FOR on my <a href="https://www.linkedin.com/in/alexfloresveliz/" target="_blank"> LinkedIn</a> profile. I also like to freelance in my spare time, so if you'd like to discuss a project, let me know.</p>
          <p>I also do and have done pro-bono work, so if you have a cause or know of one that you think would interest me and they would like a dev or designer, hit me up!</p>
          <p>I am always available for coffee as well, if you just want to chat. I'm always available for coffee.</p>
          </Modal>
        </span>
        <span>
          <a href="#fellow" onClick={this.showModal4}>Listen</a>
          <Modal open={this.state.modal4} onClose={this.onCloseModal} little>
          <h1> Listen </h1>
          <iframe width="680" height="435" src="https://www.youtube.com/embed/MDACd-ShjHk?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
          <p>One of my favorites.</p>
          </Modal>
        </span>
        </div>
      </nav>
    )
  }
}

export default NavBar;
