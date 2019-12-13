import React from 'react';
import logo from './logo.svg';
import './App.css';

/** 
 * Dynamic particle effects
 */
function header() {

}

/** 
 * Image of my face
 */
function myFace() {

}

/**
 * The about me section
 */
function aboutSection() {

}

/**
 * A project section has multiple projects that contain
 * - a title
 * - an image
 * - a description
 */
function project() {

}

/**
 * This section contains all the projects I've done, made up of projects
 */
function projectSection() {

}

/**
 * Main app
 */
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
