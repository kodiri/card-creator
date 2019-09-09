import React, { Component } from 'react';
import './Navbar.css';


export default class Navbar extends Component {
    render() {
      return <div className='navbar'>
        <div><button className='button' onClick=''>Home</button></div>
        <div><button className='button' onClick=''>Reset</button></div>
        <div><button className='button' onClick=''>Logo</button></div>
      </div>
    }
}