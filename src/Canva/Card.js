import React, { Component } from 'react';
import './CardMessage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import GoogleFontLoader from 'react-google-font-loader';
import contentEditable from './InlineEdit/InlineEdit.js';
import { thisExpression } from '@babel/types';
import Draggable from "react-draggable";

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      font: { fontFamily: 'Oleo Script, cursive', color: '#313D45', fontSize: '50px' },
      image: 'image',
      frame: '7px solid #ACCCD7',
      background: '#ACCCD7',
      coords: { top: 100, bottom: 100, left: 100, right: 100 }
    };
  }

  draggableElement() {
    let dragEl = document.querySelector('.draggableEl').childNodes;
    console.log(dragEl);
  }


  // draggableElement()

  getPosition(parent, child) {
    const rect = parent.getBoundingClientRect();
    const c = child.getBoundingClientRect();
    let coords = {
      left: -(rect.right - c.right) + 5, top: -(c.top - rect.top) + 5,
      right: rect.right - c.right - 5, bottom: rect.bottom - c.bottom - 5
    }
    this.setState({ coords });
  }

  componentDidMount() {
    this.getPosition(document.querySelector('.border-card'),
    document.querySelector(".draggableEl"));
    this.setState({
      background: this.props.background,
      border: this.props.border,
      fonts: this.props.fonts,
      color: this.props.color,
      backgroundImage: this.props.backgroundImage,
    })
    let dragEl = document.querySelector('.draggableEl').childNodes;
    console.log([...dragEl]);
  }
  render() {
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
                <Draggable
                  bounds={{
                    top: this.state.coords.top, bottom: this.state.coords.bottom,
                    right: this.state.coords.right, left: this.state.coords.left
                  }}
                  onStart={this.handleStart}
                  onDrag={this.handleDrag}
                  onStop={this.handleStop}>
                  <h1 className='card-text' style={{
                    color: '', fontFamily: '',
                    fontSize: ''
                  }}>
                    <EditableH1 value={this.props.message} changeProperty={this.props.changeProperty} />
                  </h1>
                </Draggable>
                <Draggable
                  bounds={{
                    top: this.state.coords.top, bottom: this.state.coords.bottom,
                    right: this.state.coords.right, left: this.state.coords.left
                  }}
                  onStart={this.handleStart}
                  onDrag={this.handleDrag}
                  onStop={this.handleStop}>
                  <div className='icon'>
                    <FontAwesomeIcon icon={['fas', 'wine-bottle']} />
                  </div>
                  </Draggable>
                  <Draggable
                  bounds={{
                    top: this.state.coords.top, bottom: this.state.coords.bottom,
                    right: this.state.coords.right, left: this.state.coords.left
                  }}
                  onStart={this.handleStart}
                  onDrag={this.handleDrag}
                  onStop={this.handleStop}>
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
                {/* </Draggable> */}
              </div>
            </div>
          </div>
      </>
        )
      }
}