import React from 'react';
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
              I build web applications, and services. As a hobby I also do machine learning side projects with computer vision, and model interesting data.
            </p>
            <p className="about-text">
              Here are some of technologies I'm proficient in:
            </p>
            <div>
              <p className="about-pro">Languages:</p>
              <Badge pill className="badge-tech" variant="light">Javascript</Badge>
              <Badge pill className="badge-tech" variant="light">Python</Badge>
              <Badge pill className="badge-tech" variant="light">Java</Badge>
              <p className="about-pro">Technologies:</p>
              <Badge pill className="badge-tech" variant="light">Vue.js</Badge>
              <Badge pill className="badge-tech" variant="light">React.js</Badge>
              <Badge pill className="badge-tech" variant="light">Docker</Badge>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default About