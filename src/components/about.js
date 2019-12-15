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
              </p>
              <p className="about-text">
                Here are some of technologies I'm proficient in.
              </p>
              <div>
                <p className="about-pro">Languages:</p>
                <Badge pill className="badge-pill" variant="light">Javascript</Badge>
                <Badge pill className="badge-pill" variant="light">Python</Badge>
                <p className="about-pro">Frameworks:</p>
                <Badge pill className="badge-pill" variant="light">VueJS</Badge>
                <Badge pill className="badge-pill" variant="light">React</Badge>
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
  render() {
    return ( 
      <div id="about-profile">
        <img src={placeholder} className="profile" alt="Credits: Branden Lee" />
      </div>
    );
  }
}

export default About