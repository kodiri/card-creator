import React, { Component } from 'react';
import './CardMessage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import GoogleFontLoader from 'react-google-font-loader';
import contentEditable from './InlineEdit/InlineEdit.js';
import { thisExpression } from '@babel/types';

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      font: {fontFamily: 'Oleo Script, cursive', color: '#313D45', fontSize: '50px'},
      image: 'image',
      frame: '7px solid #ACCCD7',
      background: '#ACCCD7'
    };
  }

  componentDidMount() {
    this.setState({
      background: this.props.background,
      border: this.props.border, 
      fonts: this.props.fonts,
      color: this.props.color
    })
  }

  render() {
    let EditableH1 = contentEditable('span');
    return (
      <>
       {console.log('the fonts prop from canva is aaaa', this.props.message)}
        <div className='container'>
          <div className='border-card' style={{ border: '' }}>
            <div className='card'  style={{ background: this.props.background, color: this.props.color, border: this.props.border, fontFamily: this.props.fonts, backgroundImage: `url(${this.props.image})` }}>
              <h1 className='card-text' style={{
                color: '', fontFamily: '',
                fontSize: ''
              }}><EditableH1 value={this.props.message} changeProperty={this.props.changeProperty} /></h1>
              <div className='icon'>
                <FontAwesomeIcon icon={['fas', 'wine-bottle']} />
              </div>
              <div className='icon-glass'>
                <FontAwesomeIcon icon={['fas', 'glass-cheers']} />
              </div>
              <GoogleFontLoader
                fonts={[
                  {
                    font: this.state.font.fontFamily,
                    weights: [400, '400i'],
                  }
                ]}
                subsets={['cyrillic-ext', 'greek']}
              />
            </div>
          </div>
        </div>
      </>
    )
  }
}