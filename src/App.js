import React from 'react';
import './App.css';
import Canva from './Canva/Canva.js';
import Navbar from './Navbar/Navbar.js';
import Tools from './Tools/Tools.js';
// import Tool from './Tools/Tool.js';
import Download from './Download/Download.js';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

class App extends React.Component {
  constructor() {
    super();
    this.state = {colors: '#f68989'}
  }

  changeProperty(key, value) {
    this.setState({[key]: value})
    console.log('event triggered', key, value)
  }

  render() {
    return (
      <div className="App">
          <div className='maincontainer'>
            <Navbar></Navbar>
            <Tools changeProperty={(key, value) => this.changeProperty(key, value)}></Tools>
            <Canva background={this.state.colors} frames={this.state.frames} fonts={this.state.fonts}></Canva>
            <Download></Download>
          </div>
      </div>
    );
  }
}

export default App;
