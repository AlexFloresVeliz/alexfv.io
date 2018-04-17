import React, { Component } from 'react';
import './App.css';
import Modal from "react-responsive-modal";

class NavBar extends Component {

  state = {
    open: false
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    return (
      <nav>
        <div className="nav">
        <span>
          <a href="#hello" onClick={this.onOpenModal}>Bio</a>
          <Modal open={open} onClose={this.onCloseModal} little>
          <h1> Bio 👨‍💻 </h1>
          <img data-caption="Me" width="35%" height="35%" src="img/me.png"/>
          <p>Hey! Welcome to my website! My name is Alex Flores-Veliz, and I am an aspiring front-end web developer looking to grow my technical and personal skills at an organization where my graphic design skills and familiarity with software development can be applied to help the organization reach its goals. I am proficient in producing and editing computer graphics through Adobe PhotoShop, creating logos and other vector graphics in Adobe Illustrator, and can create interactive prototypes of iOS/Android and web applications using Adobe XD.</p>
          <p>I'm a 3rd year Computer Science student at CUNY Lehman College, the current President of the National Society of Black Engineers chapter at Lehman College, and one of the organizers of the <a href= "http://bit.ly/NSHack17" target="_blank">2017 NS Hackathon</a>. I interned for a software consulting company named<a href="http://gestalt.io/" target="_blank"> Gestalt Interactive</a> in NY as a Software Development Intern during the summer of 2017 where I worked on designing and implementing designs I worked on. Want to learn more? Contact me! 😇</p>
          </Modal>
        </span>  
          <a href="#mellow">Tech</a>
          <a href="#yellow">Contact</a>
          <a href="#fellow">Suprise</a>
        </div>
      </nav>
    )
  }
}

export default NavBar;
