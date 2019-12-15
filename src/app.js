import React from 'react';
// components
import NavBar from './components/nav.js'
import Header from './components/header.js'
import About from './components/about.js'
import Work from './components/work.js'
import Projects from './components/projects.js'
// css files
import './css/app.css';
// image assets
import steam from './assets/images/steam.png';
// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

const projectArray=  [
  // add a new project by the below format, remember to import image file
  { name:"steam-products", description:"A STEAM PRODUCT", href:"https://github.com/jacobprouse/steam-products", src: steam },
  { name:"steam-produc", description:"A STEAM PRODUCT", href:"https://github.com/jacobprouse/steam-products", src: steam },
  { name:"stam-product", description:"A STEAM PRODUCT", href:"https://github.com/jacobprouse/steam-products", src: steam }
]

class App extends React.Component{
  render() {
    return (
      <div className="app">
        <NavBar></NavBar>
        <Header></Header>
        <About></About>
        <Work></Work>
        <Projects projects={projectArray}></Projects>
      </div>
    );
  }
}

export default App;
