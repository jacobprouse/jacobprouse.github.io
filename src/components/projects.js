import React from 'react';
import { Card } from 'react-bootstrap';
import steam from '../assets/images/steam.png';
import '../styles/projects.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'


/**
 * the child component
 */
class Project extends React.Component {
  // const prop = props<Navbar.Brand href="#home">
  render() {
    return ( 
      <div>
        <FontAwesomeIcon className="bin" icon={faGithub} size="10x"></FontAwesomeIcon>
        <a href={this.props.project.href} target="_">
          <Card className="project">
            <Card.Img variant="top" src={this.props.project.src} className="bordered-image"></Card.Img>
            <Card.Body>
              <Card.Title className="project-title">{this.props.project.name}</Card.Title>
              <Card.Text className="project-description">
                {this.props.project.description}
              </Card.Text>
            </Card.Body>
          </Card>
        </a>
      </div>
    );
  }
}
  
/**
 * the parent component that initializes its child component project
 */
class Projects extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      under_construction: false
    }
  }
  render() {
    const projectArray=  [
      // add a new project by the below format, remember to import image file
      { name:"steam-products", description:"A STEAM PRODUCT", href:"https://github.com/jacobprouse/steam-products", src: steam },
      { name:"steam-produc", description:"A STEAM PRODUCT", href:"https://github.com/jacobprouse/steam-products", src: steam },
      { name:"stam-prod22uct", description:"A STEAM PRODUCT", href:"https://github.com/jacobprouse/steam-products", src: steam },
      { name:"stam-product", description:"A STEAM PRODUCT", href:"https://github.com/jacobprouse/steam-products", src: steam },
      { name:"stama-product", description:"A STEAM PRODUCT", href:"https://github.com/jacobprouse/steam-products", src: steam }
    ]
    const projects = []
    for(let i = 0; i < projectArray.length; i++) {
      projects.push(<div key={projectArray[i].name} href="www.google.com" target="_"><Project project={projectArray[i]}></Project></div>);
    }

    if(!this.state.under_construction) {
      return ( 
        <div id="projects">
          <p className="projects-title">My Projects</p>
          <div className="project-container">
              {projects}
          </div> 
        </div>
      );
    }
    else return <div id="projects"><h1 className="construction">Projects: Under Construction</h1></div>
  }
}

export default Projects