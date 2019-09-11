import React from 'react';
import logo from './logo.svg';
import './App.css';
import Canva from './Canva/Canva.js';
import Navbar from './Navbar/Navbar.js';
import Tools from './Tools/Tools.js';
// import Tool from './Tools/Tool.js';
import Download from './Download/Download.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = {colors: 'red'}
  }

  changeProperty(key, value) {
    this.setState({[key]: value})
  }

  render() {
    return (
      <div className="App">
          <Navbar></Navbar>
          <div className='container'>
            <Tools changeProperty={(key, value) => this.changeProperty(key, value)}></Tools>
            <Canva background={this.state.colors} frames={this.state.frames} fonts={this.state.fonts}></Canva>
            <Download></Download>
          </div>
      </div>
    );
  }
}

export default App;
