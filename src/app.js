import React from 'react';
// components
import NavBar from './components/nav.js'
import Header from './components/header.js'
import About from './components/about.js'
import Work from './components/work.js'
import Projects from './components/projects.js'
import Contact from './components/contact.js'
// css files
import './styles/app.scss';
// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component{
  render() {
    return (
      <div className="app">
        <NavBar></NavBar>
        <Header></Header>
        <About></About>
        <Work></Work>
        <Projects></Projects>
        <Contact></Contact>
      </div>
    );
  }
}

export default App;
