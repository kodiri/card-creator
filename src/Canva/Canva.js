import React, { Component } from 'react';
import './Canva.css';
import Card from './CardMessage.js';
import CardImage from './CardImage.js';

export default class Canva extends Component {
    
    render() {
      let font = {fontFamily: 'Oleo Script, cursive', color: '#313D45', fontSize: '50px'};
      return <div className='canva'>
          <p style={{backgroundColor: this.props.background, 
            border: this.props.frames, fontFamily: this.props.fonts}}>Canva</p>
          <Card font={font} image='image' frame='7px solid #ACCCD7' background='#ACCCD7' message='Congratulations!' ></Card>
          {/* <CardImage font={font} image='https://www.goddardvetgroup.co.uk/content/uploads/2018/01/rabbitcosts.png' frame='7px solid #F69188' background='#ACCCD7' message='Some Bunny Loves You' ></CardImage> */}
        </div>
    }
}