import React, { Component } from 'react';
import './CardMessage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import GoogleFontLoader from 'react-google-font-loader';
import contentEditable from './InlineEdit/InlineEdit.js';
import Draggable from "react-draggable";

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      font: { fontFamily: 'Oleo Script, cursive', color: '#313D45', fontSize: '50px' },
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
      color: this.props.color,
      backgroundImage: this.props.backgroundImage,
    })
  }
  render() {
    const dragHandlerd =  {bounds: 'parent', axis: 'both'};
    let EditableH1 = contentEditable('span');
    return (
      <>
        <div className='container'>
          <div className='border-card' style={{ border: '' }} >
            <div className='card' style={{
              background: this.props.background, color: this.props.color,
              border: this.props.border, backgroundImage: `url(${this.props.backgroundImage})`, backgroundSize: 'cover', fontFamily: this.props.fonts
            }}>
              <div className="draggableEl">
                <Draggable {...dragHandlerd}>
                  <h1 className='card-text' style={{
                    color: '', fontFamily: '',
                    fontSize: ''
                  }}>
                    <EditableH1 value={this.props.message} changeProperty={this.props.changeProperty} />
                  </h1>
                </Draggable>
                <Draggable {...dragHandlerd}>
                  <div className='icon'>
                    <FontAwesomeIcon icon={['fas', 'wine-bottle']} />
                  </div>
                </Draggable>
                <Draggable {...dragHandlerd}>
                  <div className='icon-glass'>
                    <FontAwesomeIcon icon={['fas', 'glass-cheers']} />
                  </div>
                </Draggable>
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
        </div>
      </>
    )
  }
}