import React from 'react';
import './App.css';
import Canva from './Canva/Canva.js';
import Navbar from './Navbar/Navbar.js';
import Tools from './Tools/Tools.js';
// import Tool from './Tools/Tool.js';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
// import { pdf } from '@react-pdf/renderer';
library.add(fas);

class App extends React.Component {
  constructor() {
    super();
    this.state = {bgcolors: '#f68989', message: 'Congratulations!'}
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
            <Canva background={this.state.bgcolors} backgroundImage={this.state.bgimages}
            frames={this.state.frames} color={this.state.colors} fonts={this.state.fonts}
            message={this.state.message} changeProperty={(key, value) => this.changeProperty(key, value)}></Canva>
          </div>
      </div>
    );
  }
}

export default App;
