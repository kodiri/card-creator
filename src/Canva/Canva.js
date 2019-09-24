import React, { Component } from 'react';
import './Canva.css';
import Card from './Card.js';
import Pdf from './Pdf.js';
import CardImage from './CardImage.js';


export default class Canva extends Component {
    constructor(props) {
      super(props);
      this.state = {
            background: props.background
      }
    }
    
    render() {
      return <div className='canva'>
            <Card border={this.props.frames} background={this.props.background} backgroundImage={this.props.backgroundImage} 
            color={this.props.color} fonts={this.props.fonts} message={this.props.message} changeProperty={this.props.changeProperty} ></Card>
              <Pdf border={this.props.frames} background={this.props.background} backgroundImage={this.props.backgroundImage} 
            color={this.props.color} fonts={this.props.fonts} message={this.props.message} changeProperty={this.props.changeProperty} ></Pdf>
            
          </div>
    }
}