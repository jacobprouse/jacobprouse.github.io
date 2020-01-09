import React from 'react';
import { Button, Container } from 'react-bootstrap'

import '../styles/contact.scss';

class Contact extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      under_construction: false
    }
  }
  render() {
    if(!this.state.under_construction){
      return (
        <Container id="contact">
          <div className="contact-container">
            <p className="contact-title">Contact Me</p>
            <p className="contact-description">I accept freelance work centered around web apps and portfolio websites, so send me an email if you're interested.</p>
            <a href="mailto:jacob.a.prouse@gmail.com"><Button id="contact-btn">Email</Button></a>
          </div>
        </Container>
      );
    }
    else {
      return (
        <div id="contact"><h1 className="construction">Contact: Under Construction</h1></div>
      );
    }
  }
}

export default Contact;