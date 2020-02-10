import React from 'react';
import { Row, Col, Container } from 'react-bootstrap'
import face from '../assets/images/profile.png'

import '../styles/header.scss';


/** 
 * Dynamic effects or animation
 */
class Header extends React.Component {
  render() {
    return ( 
      <Container id="home" className="welcome-header">
        <Row>
          <Col className="header-align">
            <p id="welcome-intro" className="welcome-title">My name is</p>
            <h1 id="welcome-name" className="welcome-title">Jacob Prouse</h1>
            <h1 id="welcome-slog" className="welcome-title">I build and deliver web solutions</h1>
            <p id="welcome-descr">
              I am a software engineer specializing in building, designing, and deploying web applications.
            </p>
          </Col>
          <Col lg="4">
            <Face></Face>
          </Col>
        </Row>
      </Container>
    );
  }
}
/** 
 * Image of my face
 */
class Face extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hover:false
    }
    this.onMouseEnter = this.onMouseEnter.bind(this)
    this.onAnimationEnd = this.onAnimationEnd.bind(this)
  }
  // for when we want the animation to begin
  onMouseEnter() {
    this.setState({
      hover: true
    })
  }
  // for when we want to end the animation
  onAnimationEnd() {
    this.setState({
      hover: false
    })
  }
  render() {
    return ( 
      <div>
        <img src={face} onMouseEnter={this.onMouseEnter} onAnimationEnd={this.onAnimationEnd} className={this.state.hover ? 'profile-animate profile':'profile' } title="Photo Credit: Branden Lee" alt="Credit: Branden Lee" />
      </div>
    );
  }
}


export default Header