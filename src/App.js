import React from 'react';
import './App.css';
import Canva from './Canva/Canva.js';
import Navbar from './Navbar/Navbar.js';
import Tools from './Tools/Tools.js';
// import Tool from './Tools/Tool.js';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

class App extends React.Component {
  constructor() {
    super();
    let obj = this.initialState();

    this.state = { 
      bgcolors: obj.bgcolors, message: obj.message,
      colors: obj.colors, frames: obj.frames ,
      bgimages: obj.bgimages, fonts: obj.fonts
    };
    this.saveProperty = this.saveProperty.bind(this);
    this.resetProperties = this.resetProperties.bind(this);
  }

  initialState() {
    return (
      {bgcolors: localStorage.getItem('bgcolors') || '#f68989', message: localStorage.getItem('message') || 'Congratulations!',
      colors: localStorage.getItem('colors') || '#fff', frames: localStorage.getItem('frames') || '6px solid #fff',
      bgimages: localStorage.getItem('bgimages') || '', fonts: localStorage.getItem('fonts') || 'Oleo Script, cursive'}
    )
  }

  changeProperty(key, value) {
    this.setState({ [key]: value })
    console.log('event triggered', key, value)
  }

  resetProperties() {
    window.localStorage.clear();
    let obj = this.initialState();
    this.setState({ 
      bgcolors: obj.bgcolors, message: obj.message,
      colors: obj.colors, frames: obj.frames ,
      bgimages: obj.bgimages, fonts: obj.fonts
    });
    console.log('buutton reset')
  }

  saveProperty() {
    //localStorage.clear();.+
    console.log(this.state, 'is the this obj in app')
    for (let key of Object.keys(this.state)) {
      localStorage.setItem(key, this.state[key]);
    }
    console.log(localStorage);
    console.log('button save');
  }

  render() {
    return (
      <div className="App">
        <div className='maincontainer'>
          <Navbar bgcolors={this.state.bgcolors} resetProperties={this.resetProperties} saveProperty={this.saveProperty}></Navbar>
          <Tools changeProperty={(key, value) => this.changeProperty(key, value)}></Tools>
          <Canva background={this.state.bgcolors} backgroundImage={this.state.bgimages}
            frames={this.state.frames} color={this.state.colors} fonts={this.state.fonts}
            message={this.state.message} changeProperty={(key, value) => this.changeProperty(key, value)}></Canva>
          {/* <button onClick={this.saveProperty}>Save</button>
          <button onClick={this.resetProperties}>Reset</button> */}
        </div>
      </div>
    );
  }
}

export default App;
