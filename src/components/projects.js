import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import '../css/projects.css';

class Project extends React.Component {
  // const prop = props<Navbar.Brand href="#home">
  render() {
    return ( 
      <Card className="project">
        <Card.Img variant="top" src={this.props.project.src} className="bordered-image"></Card.Img>
        <Card.Body>
          <a href={this.props.project.href} target="_" ><Card.Title>{this.props.project.name}</Card.Title></a>
          <Card.Text>
            {this.props.project.description}
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}
  
/**
 * This section contains all the projects I've done, made up of projects
 */
class Projects extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      under_construction: true
    }
  }
  render() {
    const projectArray = this.props.projects
    const projects = []
    for(let i = 0; i < projectArray.length; i++) {
      projects.push(<Col className="project-column" key={projectArray[i].name}><Project project={projectArray[i]}></Project></Col>);
    }

    if(!this.state.under_construction) {
      return ( 
        <div id="projects">
          <p>My Projects</p>
          <div className="projects">
            <Row className="project-container">
              {projects}
            </Row>
          </div> 
        </div>
      );
    }
    else return <div id="projects"><h1 className="construction">Projects: Under Construction</h1></div>
  }
}

export default Projects