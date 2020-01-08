import React from 'react';
import { Row, Col, Container } from 'react-bootstrap'

import '../styles/header.scss';


/** 
 * Dynamic effects or animation
 */
class Header extends React.Component {
  render() {
    return ( 
      <Container id="home" className="welcome-header">
          <Row>
            <Col className="text-left">
              <p id="welcome-intro" className="welcome-title">My name is</p>
              <h1 id="welcome-name" className="welcome-title">Jacob Prouse.</h1>
              <h1 id="welcome-slog" className="welcome-title">I build and deliver web solutions.</h1>
              <p id="welcome-descr">
                I am a software engineer specializing in building, designing, and deploying web applications.
              </p>
            </Col>
          </Row>
      </Container>
    );
  }
}


export default Header