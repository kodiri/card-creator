import React from 'react';
import './App.css';
import Canva from './Canva/Canva.js';
import Navbar from './Navbar/Navbar.js';
import Tools from './Tools/Tools.js';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

class App extends React.Component {
  constructor() {
    super();
    this.state = this.initialState();
    this.saveProperty = this.saveProperty.bind(this);
    this.resetProperties = this.resetProperties.bind(this);
  }

  initialState() {
    return (
      {bgcolors: localStorage.getItem('bgcolors') || '#f68989', message: localStorage.getItem('message') || 'Congratulations!',
      colors: localStorage.getItem('colors') || '#fff', frames: localStorage.getItem('frames') || '6px solid #fff',
      bgimages: localStorage.getItem('bgimages') || '', fonts: localStorage.getItem('fonts') || 'Oleo Script, cursive',
      position0: localStorage.getItem('position0') || 'translate(0, 0)', position1: localStorage.getItem('position1') || 'translate(0, 0)',
      position2: localStorage.getItem('position2') || 'translate(0, 0)'}
    )
  }

  changeProperty(key, value) {
    this.setState({ [key]: value })
  }

  resetProperties() {
    window.localStorage.clear();
    let obj = this.initialState();
    document.querySelector('.elem1').style.transform = 'translate(0, 0)';
    document.querySelector('.elem2').style.transform = 'translate(0, 0)';
    document.querySelector('.elem3').style.transform = 'translate(0, 0)';
    this.setState(obj);
  }

  saveProperty() {
    for (let key of Object.keys(this.state)) {
      localStorage.setItem(key, this.state[key]);
    }
    let positions = [document.querySelector('.elem1').style.transform,
    document.querySelector('.elem2').style.transform,
    document.querySelector('.elem3').style.transform]
    for (let position in positions) {
      localStorage.setItem('position' + position, positions[position]);
    }
  }

  render() {
    return (
      <div className="App">
        <div className='maincontainer'>
          <Navbar bgcolors={this.state.bgcolors} resetProperties={this.resetProperties} saveProperty={this.saveProperty}></Navbar>
          <Tools changeProperty={(key, value) => this.changeProperty(key, value)}></Tools>
          <Canva background={this.state.bgcolors} backgroundImage={this.state.bgimages}
            frames={this.state.frames} color={this.state.colors} fonts={this.state.fonts}
            position0={this.state.position0}
            position1={this.state.position1} position2={this.state.position2}
            message={this.state.message} changeProperty={(key, value) => this.changeProperty(key, value)}></Canva>
        </div>
      </div>
    );
  }
}

export default App;
