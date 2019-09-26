import React, { useState,useEffect } from 'react';
import './CardMessage.css';
import '../Download/Download.css';
// import { thisExpression } from '@babel/types';
// import "./PDF.css";
import { PDFDownloadLink, Document, Page, Text, View, Image, Link, StyleSheet, Font } from "@react-pdf/renderer";


 
const PdfCard = (props) => {

  // console.log(props);

  const backgroundImage = props.backgroundImage ? props.backgroundImage : 'none';

  const styles = {
    page: {
      backgroundColor: '#ffffff',
      padding: 40
    },
    card: {
      height: '390px',
      width: '100%',
      border: '6 solid #ffffff',
      verticalAlign: 'middle',
      alignItems: 'center',
      backgroundColor: 'none',
      // border: 'none', 
      backgroundImage: 'none', 
      backgroundSize: 'cover',
    },
    cardTexth1 : {
      position:'absolute',
      top: '180',
    },
    cardText: {
      letterSpacing: 0.03,
      fontFamily: 'MontserratRegular',
      fontSize: 30,
      fontWeight: 800,
      color:'#000000',
    },
    backgroundImage: {
      width: '100%',
      height: '100%',
      position:'absolute'
    },
    centerIcon: {
      alignItems: 'center',
      position: 'absolute',
      top: '220'
    },
    icon: {
      width: '25px',
      color: '#313D45',
      
    },
    centerIconGlass: {
      alignItems: 'center',
      position: 'absolute',
      bottom: '10'
    },

    iconGlass: {
      width: '100px',
      color: '#E3EEF2',
    },
  };

  const [pdfStyles, setPdfStyles] = useState(StyleSheet.create(styles));

  Font.register({ family: 'MontserratRegular', src: 'https://fonts.gstatic.com/s/montserrat/v12/JTUSjIg1_i6t8kCHKm459Wlhzg.ttf', fontWeight: 900 });

  useEffect(() => {
    styles.card.backgroundColor = props.background;
    styles.card.border = props.border;
    styles.cardText.color = props.color;
    // styles.cardText.position = 

    // console.log(styles);
    setPdfStyles(StyleSheet.create(styles))
  }, [props]);

  // console.log(pdfStyles);
  // console.log(props.message);
  return (
  <Document>
    <Page style={pdfStyles.page} size="A4" wrap>
      <View style={[pdfStyles.card]}>
      <View style={[pdfStyles.backgroundImage]}>
        <Image src={ backgroundImage } />
      </View>
      <View style={[pdfStyles.cardTexth1]}>
      <Text style={[pdfStyles.cardText]}>{props.message}</Text>
      </View>
      <View style={[pdfStyles.centerIcon]}>
        <Image style={pdfStyles.icon} src={process.env.PUBLIC_URL + '/wine-bottle-solid.png'} />
      </View>
      <View style={[pdfStyles.centerIconGlass]}>
        <Image style={pdfStyles.iconGlass} src={process.env.PUBLIC_URL + '/glass-cheers-solid.png'} />
      </View>
      </View>
    </Page>
  </Document>
)
            }
  
 const pdf = (props) => (
  <div className='download'>
    <PDFDownloadLink document={<PdfCard {...props} />} fileName="card.pdf">
      {({ blob, url, loading, error }) => (loading ? 'Loading card...' : 'Download')}
    </PDFDownloadLink>
  </div>
)
export default pdf;

