import React from 'react';
import placeholder from '../assets/images/placeholder.png'
import { Row, Col, Badge } from 'react-bootstrap'

import '../css/about.css';

/**
 * The about me section
 */
class About extends React.Component {
    render() {
      return ( 
        <div id="about">
          <Row>
            <Col className="about-column">
              <h2 className="about-title">About Me</h2>
              <p className="about-text">
                Hello! I'm Jacob Prouse, a software engineer based in London Ontario. I attend <a className="about-link" href="https://uwo.ca">Western University</a>.
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
              <Face href="https://jacobprouse.github.io/personal"></Face>
            </Col>
          </Row>
        </div>
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
        <img src={placeholder} onMouseEnter={this.onMouseEnter} onAnimationEnd={this.onAnimationEnd} className={this.state.hover ? 'profile-animate profile':'profile' } alt="Credits: Branden Lee" />
      </div>
    );
  }
}

export default About