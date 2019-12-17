import React from 'react';
import { Button } from 'react-bootstrap';
import '../css/contact.css';

class Contact extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      under_construction: true
    }
  }
  render() {
    if(!this.state.under_construction){
      return (
        <div id="contact"></div>
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