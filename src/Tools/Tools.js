import React, { Component } from 'react';
import './Tools.css';
import Tool from './Tool.js';


export default class Tools extends Component {
    render() {
      return (
        <div className='tools'>
          <Tool
            title="Colors" colors={['blue', 'green','orange', 'pink', 'olive']} changeProperty={(key, value) => 
              this.props.changeProperty(key, value)}
          />
          <Tool
          title="Fonts"
          fonts={['Impact, Charcoal, sans-serif', 'Arial, Helvetica, sans-serif', '"Comic Sans MS", cursive, sans-serif']} changeProperty={(key, value) => 
            this.props.changeProperty(key, value)}
        />
          <Tool
            title="Frames" frames={['5px solid blue', '5px double yellow ', '5px outset purple']} 
              changeProperty={(key, value) => 
              this.props.changeProperty(key, value)}
          />
            {/* <Tool
            title="Images" frames={['./Images/']} 
              changeProperty={(key, value) => 
              this.props.changeProperty(key, value)}
          /> */}
      </div>
      );
    }
}