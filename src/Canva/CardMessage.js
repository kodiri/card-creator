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
      background: '#ACCCD7',
      message: 'Congratulations!',
    };
  }

  componentDidMount() {
    this.setState({background: this.props.background,
      border: this.props.border
    })
  }
  render() {
    let EditableH1 = contentEditable('span');
    console.log('the bg prop from canva is', this.props.background);
    return (
      <>
        <div className='container'>
          <div className='border-card' style={{ border: '' }}>
            <div className='card' style={{ background: this.props.background, border: this.props.border }}>
              <h1 className='card-text' style={{
                color: '', fontFamily: '',
                fontSize: ''
              }}><EditableH1 value={'Hello!'} /></h1>
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