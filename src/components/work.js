import React from 'react';
import '../styles/work.scss';
import { Row, Col, Nav, Tab, Container } from 'react-bootstrap';


class Work extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      under_construction: false
    }
  }
  render() {
    if(!this.state.under_construction){
      return(
          <Container id="work">
            <Row className="work-row">
              <Col>
                <h2 className="work-title">Work Experience</h2>
              </Col>
            </Row>
            <Tab.Container id="work-tabs" defaultActiveKey="vhs">
              <Row>
                <Col lg="3">
                  <Nav variant="pills" className="flex-column">
                    <Nav.Item className="work-tab">
                      <Nav.Link className="work-name" eventKey="vhs">Virtual High School</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col>
                  <Tab.Content className="tab-content">
                    <Tab.Pane eventKey="vhs" show="true">
                      <h4 className="work-position">Web Development Student</h4>
                      <p className="work-position-date">Summer 2019</p>
                      <ul>
                        <li>
                          Built a Database Asset Management System and participated in Alpha and Beta testing rounds
                        </li>
                        <li>
                          Improved database asset management system search times by 100% by implementing Full Text
                          search on a MySQL instance and optimizing database queries
                        </li>
                        <li>
                          Performed back-end unit testing using a testing suite of Mocha, Chai, and Sinon
                        </li>
                      </ul>

                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </Container>
      );
    }
    else return <div id="work"><h1 className="construction">Work Experience: Under Construction</h1></div>
  }
}

export default Work;