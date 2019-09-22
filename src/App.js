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
    this.state = {bgcolors: '#f68989', message: 'Congratulations!'}
  }

  changeProperty(key, value) {
    this.setState({[key]: value})
    console.log('event triggered', key, value)
  }

  saveProperty = () =>{
    localStorage.clear();
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
          </div>
          {/* <DraggableComp></DraggableComp> */}
      </div>
    );
  }
}

export default App;
