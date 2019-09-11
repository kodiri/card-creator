import React, { Component } from 'react';
import './Canva.css';


export default class Canva extends Component {
    render() {
      return <div>
          <p className='canva' style={{backgroundColor: this.props.background, 
            border: this.props.frames, fontFamily: this.props.fonts}}>Canva</p>
      </div>
    }
}