import React, { Component } from 'react';
import './Tools.css';
import Tool from './Tool.js';


export default class Tools extends Component {
    render() {
      return (
        <div className='tools'>
          <Tool
            title="BgColors" name="Background Color" openProp={false} bgcolors={['skyblue', 'lightseagreen','lemonchiffon', 'violet', 'lightpink']} changeProperty={(key, value) => 
              this.props.changeProperty(key, value)}
          />
          <Tool
          title="Fonts" name="Font Style" openProp={false}
          fonts={['Impact, Charcoal, sans-serif', 'Arial, Helvetica, sans-serif', '"Comic Sans MS", cursive, sans-serif']} changeProperty={(key, value) => 
            this.props.changeProperty(key, value)}
        />
          <Tool
            title="Frames" name='frames' openProp={false} frames={['5px solid blue', '5px double yellow ', '5px outset purple']} 
              changeProperty={(key, value) => 
              this.props.changeProperty(key, value)}
          />
          <Tool
            title="Colors" name="Text Color" openProp={false} colors={['skyblue', 'lightseagreen','lemonchiffon', 'violet', 'lightpink']} changeProperty={(key, value) => 
              this.props.changeProperty(key, value)}
          />
          <Tool
            title="BgImages" name="Background Image" bgImages={['https://cdn.pixabay.com/photo/2017/08/12/10/13/background-2633962_960_720.jpg', 
            'https://img.freepik.com/free-vector/blue-abstract-acrylic-brush-stroke-textured-background_53876-86373.jpg?size=626&ext=jpg',
            'https://htmlcolorcodes.com/assets/images/html-color-codes-color-tutorials-hero-00e10b1f.jpg']} changeProperty={(key, value) => 
              this.props.changeProperty(key, value)}
              names={["patchy", "hatching", "colored"]}
          />
      </div>
      );
    }
}