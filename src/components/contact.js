import React from 'react';
import { Button } from 'react-bootstrap'

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
        <div id="contact">
          <div className="container">
            <p className="contact-title">Contact Me</p>
            <p className="contact-description">I accept freelance work centered around web apps and portfolio websites, so send me an email if you're interested.</p>
            <a href="mailto:jacob.a.prouse@gmail.com"><Button id="contact-btn">Send STARTTLS</Button></a>
          </div>
        </div>
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