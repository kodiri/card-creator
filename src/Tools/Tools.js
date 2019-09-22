import React, { Component } from 'react';
import './Tools.css';
import Tool from './Tool.js';


export default class Tools extends Component {
  constructor() {
    super();
    this.state = {
      active: -1
    };
  }
  
  isOn = (i) => {
    return this.state.active === i;    
  }

  turnOn = (i) => {
    (this.state.active === i) ? this.setState({active: -1}) :
    this.setState({active: i});

  };
  
    render() {
      return (
        <div className='tools'>
          <Tool
            title="BgColors" enabled={this.isOn(0)} f={() => { this.turnOn(0)}} name="Background Color" openProp={false} bgcolors={['skyblue', 'lightseagreen','lemonchiffon', 'violet', 'lightpink']} changeProperty={(key, value) => 
              this.props.changeProperty(key, value)}
          />
          <Tool
          title="Fonts" name="Font Style" enabled={this.isOn(1)} f={() => { this.turnOn(1)}}
          fonts={['Impact, Charcoal, sans-serif', 'Arial, Helvetica, sans-serif', '"Comic Sans MS", cursive, sans-serif']} changeProperty={(key, value) => 
            this.props.changeProperty(key, value)}
        />
        {/* Pdf doesn't accept "px" units */}
          <Tool
            title="Frames" name='frames' frames={['5px solid blue', '5px double yellow ', '5px outset purple']} 
            enabled={this.isOn(2)} f={() => { this.turnOn(2)}} 
            changeProperty={(key, value) => this.props.changeProperty(key, value)}
          />
          <Tool
            title="Colors" name="Text Color"  enabled={this.isOn(3)} f={() => { this.turnOn(3)}} 
            colors={['skyblue', 'lightseagreen','lemonchiffon', 'violet', 'lightpink']} 
            changeProperty={(key, value) => this.props.changeProperty(key, value)}
          />
          <Tool
            title="BgImages" name="Background Image" bgImages={['https://cdn.pixabay.com/photo/2017/08/12/10/13/background-2633962_960_720.jpg', 
            'https://img.freepik.com/free-vector/blue-abstract-acrylic-brush-stroke-textured-background_53876-86373.jpg?size=626&ext=jpg',
            'https://htmlcolorcodes.com/assets/images/html-color-codes-color-tutorials-hero-00e10b1f.jpg']} changeProperty={(key, value) => 
              this.props.changeProperty(key, value)}  enabled={this.isOn(4)} f={() => { this.turnOn(4)}} 
              names={["patchy", "hatching", "colored"]}
          />
      </div>
      );
    }
}