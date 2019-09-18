import React, { Component } from 'react';
import './CardMessage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import GoogleFontLoader from 'react-google-font-loader';
import contentEditable from './InlineEdit/InlineEdit.js';
import { thisExpression } from '@babel/types';
import "./PDF.css";
import { Document, Page, Text, View, Image, Link, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    flexDirection: "column"
  },
  image: {
    width: "50%",
    padding: 10
  },
  centerImage: {
    alignItems: "center",
    flexGrow: 1
  },
  text: {
    width: "100%",
    backgroundColor: "#f0f0f0",
    paddingHorizontal: 50,
    paddingVertical: 30,
    color: "#212121"
  }
});

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
      color: this.props.color,
      backgroundImage: this.props.backgroundImage
    })
  }
  render() {
    let EditableH1 = contentEditable('span');
    return (
      const MyDocument = (
        <>
        <Document>
        <Page style={styles.page} size="A4"></Page>
        <Text><div className='container'>
          <div className='border-card' style={{ border: '' }}>
            <div className='card'  style={{ background: this.props.background, color: this.props.color,
               border: this.props.border, backgroundImage: `url(${this.props.backgroundImage})`, backgroundSize: 'cover', fontFamily: this.props.fonts}}>
              <h1 className='card-text' style={{
                color: '', fontFamily: '',
                fontSize: ''
              }}><EditableH1 value={this.props.message} changeProperty={this.props.changeProperty}/></h1>
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
        </div></Text>
        </Document>
      </>
      ),
    )
    ReactDOM.render(
      <PDFViewer>{MyDocument}</PDFViewer>,
      document.getElementById("root")
    );
  }
}