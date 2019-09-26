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
      position0x: localStorage.getItem('position0x') || 0, position0y: localStorage.getItem('position0y') || 0,
      foo: 0}
    )
  }

  changeProperty(key, value) {
    this.setState({ [key]: value })
  }

  resetProperties() {
    window.localStorage.clear();
    let obj = this.initialState();
    document.querySelector('.elem1').style.transform = 'translate(0, 0)';
    this.setState(obj);
  }

  saveProperty() {
    for (let key of Object.keys(this.state)) {
      localStorage.setItem(key, this.state[key]);
    }
    console.log(localStorage);
    localStorage.setItem('position0x', this.state.position0x);
    localStorage.setItem('position0y', this.state.position0y);
  }

  render() {
    return (
      <div className="App">
        <div className='maincontainer'>
          <Navbar bgcolors={this.state.bgcolors} resetProperties={this.resetProperties} saveProperty={this.saveProperty}></Navbar>
          <Tools changeProperty={(key, value) => this.changeProperty(key, value)}></Tools>
          <Canva background={this.state.bgcolors} backgroundImage={this.state.bgimages}
            frames={this.state.frames} color={this.state.colors} fonts={this.state.fonts}
            position0x = {this.state.position0x}
            position0y = {this.state.position0y}
            position1={this.state.position1} position2={this.state.position2}
            foo = {this.state.foo}
            message={this.state.message} changeProperty={(key, value) => this.changeProperty(key, value)}></Canva>
        </div>
      </div>
    );
  }
}

export default App;
