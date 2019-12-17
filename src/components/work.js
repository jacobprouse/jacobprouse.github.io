import React from 'react';
import '../css/work.css';
import { Row, Col, Nav, Tab } from 'react-bootstrap';


class Work extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      under_construction: true
    }
  }
  render() {
    if(!this.state.under_construction){
      return(
          <div id="work">
            <Row>
              <Col className="text-left">
                <h2 className="work-title">Work Experience</h2>
              </Col>
            </Row>
            <Tab.Container id="work-tabs" defaultActiveKey="first">
              <Row>
                <Col>
                  <Nav variant="pills" className="flex-column">
                    <Nav.Item className="work-tab">
                      <Nav.Link className="work-name" eventKey="first">VHS</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="work-tab">
                      <Nav.Link className="work-name" eventKey="second">University</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col>
                  <Tab.Content className="tab-content">
                    <Tab.Pane eventKey="first">
                      <p>
                        I
                      </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>
                        bye
                      </p>
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </div>
      );
    }
    else return <div id="work"><h1 className="construction">Work Experience: Under Construction</h1></div>
  }
}

export default Work;