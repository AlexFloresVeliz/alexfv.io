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
          <h1> Bio 👨‍💻 </h1>
          <img className="profile-pic" data-caption="Me" src="img/me.png"/>
          <p>Hey! 👋 Welcome to my website! My name is Alex Flores-Veliz, and I am an aspiring front-end web developer looking to grow my technical and personal skills at an organization where my graphic design skills and familiarity with software development can be applied to help the organization reach its goals. I am proficient in producing and editing computer graphics through Adobe PhotoShop, creating logos and other vector graphics in Adobe Illustrator, and can create interactive prototypes of iOS/Android and web applications using Adobe XD.</p>
          <p>I'm a 3rd year Computer Science student at CUNY Lehman College, the current President of the National Society of Black Engineers chapter at Lehman College, and one of the organizers of the <a href= "http://bit.ly/NSHack17" target="_blank">2017 NS Hackathon</a>. I interned for a software consulting company named<a href="http://gestalt.io/" target="_blank"> Gestalt Interactive</a> in NY as a Software Development Intern during the summer of 2017 where I worked on designing and implementing designs I worked on. Want to learn more? Contact me!</p>
          </Modal>
        </span>  
        <span>
          <a href="#yellow" onClick={this.showModal2}>Tech</a>
          <Modal open={this.state.modal2} onClose={this.onCloseModal} little>
          <h1> Modal 2 </h1>
          <p>Lipsum Text</p>
          </Modal>
        </span> 
        <span>
          <a href="#mellow" onClick={this.showModal3}>Contact</a>
          <Modal open={this.state.modal3} onClose={this.onCloseModal} little>
          <h1> Modal 3 </h1>
          <p>Lipsum Text</p>
          </Modal>
        </span>
        <span>
          <a href="#fellow" onClick={this.showModal4}>Suprise</a>
          <Modal open={this.state.modal4} onClose={this.onCloseModal} little>
          <h1> Modal 4 </h1>
          <p>Lipsum Text</p>
          </Modal>
        </span>
        </div>
      </nav>
    )
  }
}

export default NavBar;
