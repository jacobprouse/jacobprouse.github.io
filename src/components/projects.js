import React from 'react';
import { Card, Container } from 'react-bootstrap';
import steam from '../assets/images/steam.png';
import website from '../assets/images/website.png';
import linear from '../assets/images/linear.png';
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
      <div className="project-wrapper">
        <FontAwesomeIcon className="bin" icon={faGithub} size="10x"></FontAwesomeIcon>
        <a href={this.props.project.href} target="_">
          <Card className="project col-md-15">
            <Card.Img variant="top" src={this.props.project.src} className="bordered-image" title={this.props.project.tags}></Card.Img>
            <Card.Body className="project-body">
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
      { name:"linear regression", description:"An example of using linear, and polynomial regression in Python without using libraries. Explores the benefits of k-fold cross validation.", tags:"Topics: Machine Learning, Python", href:"https://github.com/jacobprouse/linear_and_polynomial_regression", src: linear },
      { name:"personal website", description:"The source code for this website, made with React.js and styled with SCSS and Bootstrap.", tags:"Topics: React.js, SASS", href:"https://github.com/jacobprouse/jacobprouse.github.io", src: website },
      { name:"steam products", description:"A program that displays the top 10 games on Steam using a web scraper written with Beautiful Soup.", tags:"Topics: Python, Tkinter, BeautifulSoup", href:"https://github.com/jacobprouse/steam-products", src: steam },
    ]
    const projects = []
    for(let i = 0; i < projectArray.length; i++) {
      projects.push(<div key={projectArray[i].name} href="www.google.com" target="_"><Project project={projectArray[i]}></Project></div>);
    }

    if(!this.state.under_construction) {
      return ( 
        <Container id="projects">
          <p className="projects-title">My Projects</p>
          <div className="project-container">
              {projects}
          </div> 
        </Container>
      );
    }
    else return <div id="projects"><h1 className="construction">Projects: Under Construction</h1></div>
  }
}

export default Projects