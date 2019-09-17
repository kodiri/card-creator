import React, { Component } from 'react';
import './Canva.css';
import Card from './Card.js';
import CardImage from './CardImage.js';

export default class Canva extends Component {
    constructor(props) {
      super(props);
      this.state = {
        background: props.background
      }
    }
    render() {
      console.log('the canva colortext from app is' ,this.props.colors);

      // let font = {fontFamily: 'Oleo Script, cursive', color: '#313D45', fontSize: '50px'};
      return <div className='canva'>
          {/* <p style={{backgroundColor: this.props.background, 
            border: this.props.frames, fontFamily: this.props.fonts}}>Canva</p> */}
          <Card border={this.props.frames} image={this.props.image} background={this.props.background} color={this.props.color} fonts={this.props.fonts} message={this.props.message} changeProperty={this.props.changeProperty} ></Card>
          {/* <CardImage font={font} image='shorturl.at/gGN47' frame='7px solid #F69188' background='#ACCCD7' message='Some Bunny Loves You' ></CardImage> */}
          </div>
    }
}
