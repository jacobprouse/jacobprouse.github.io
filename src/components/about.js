import React from 'react';
import face from '../assets/images/face.png'
import { Row, Col, Badge, Container } from 'react-bootstrap'

import '../styles/about.scss';

/**
 * The about me section
 */
class About extends React.Component {
    render() {
      return ( 
        <Container id="about">
          <Row>
            <Col className="about-column">
              <h2 className="about-title">About Me</h2>
              <p className="about-text">
                Hello! I'm Jacob Prouse, a software engineer based in London Ontario attending <a className="about-link" href="https://uwo.ca">Western University</a>.
                I build web applications, and do machine learning projects as a hobby.
              </p>
              <p className="about-text">
                Here are some of technologies I'm proficient in.
              </p>
              <div>
                <p className="about-pro">Languages:</p>
                <Badge pill className="badge-pill" variant="light">Javascript</Badge>
                <Badge pill className="badge-pill" variant="light">Python</Badge>
                <Badge pill className="badge-pill" variant="light">Java</Badge>
                <p className="about-pro">Technologies:</p>
                <Badge pill className="badge-pill" variant="light">Vue.js</Badge>
                <Badge pill className="badge-pill" variant="light">React.js</Badge>
                <Badge pill className="badge-pill" variant="light">Docker</Badge>
              </div>
            </Col>
            <Col>
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
      <div id="about-profile">
        <img src={face} onMouseEnter={this.onMouseEnter} onAnimationEnd={this.onAnimationEnd} className={this.state.hover ? 'profile-animate profile':'profile' } alt="Credits: Branden Lee" />
      </div>
    );
  }
}

export default About