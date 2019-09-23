import React from 'react';
import './App.css';
import Canva from './Canva/Canva.js';
import Navbar from './Navbar/Navbar.js';
import Tools from './Tools/Tools.js';
// import Tool from './Tools/Tool.js';
import Download from './Download/Download.js';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas, faWindowRestore } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      bgcolors: localStorage.getItem('bgcolors') || '#f68989', message: localStorage.getItem('message') || 'Congratulations!',
      colors: localStorage.getItem('colors') || '#fff', frames: localStorage.getItem('frames') || '6px solid #fff',
      bgimages: localStorage.getItem('bgimages') || ''
    };
    this.baseState = this.state;
  }

  changeProperty(key, value) {
    this.setState({ [key]: value })
    console.log('event triggered', key, value)
  }

  resetProperties = () => {
    this.setState(this.baseState);
    window.localStorage.clear();
  }

  saveProperty = () => {
    //localStorage.clear();
    for (let key of Object.keys(this.state)) {
      localStorage.setItem(key, this.state[key]);
    }
    console.log(localStorage);
  }

  render() {
    return (
      <div className="App">
        <div className='maincontainer'>
          <Navbar></Navbar>
          <Tools changeProperty={(key, value) => this.changeProperty(key, value)}></Tools>
          <Canva background={this.state.bgcolors} backgroundImage={this.state.bgimages}
            frames={this.state.frames} color={this.state.colors} fonts={this.state.fonts}
            message={this.state.message} changeProperty={(key, value) => this.changeProperty(key, value)}></Canva>
          <Download></Download>
          <button onClick={this.saveProperty}>Save</button>
          <button onClick={this.resetProperties}>Reset</button>
        </div>
      </div>
    );
  }
}

export default App;
