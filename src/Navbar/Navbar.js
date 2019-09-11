import React, { Component } from 'react';
import './Navbar.css';


export default class Navbar extends Component {
    render() {
      return <div className='navbar'>
        <button className='button' onClick=''>Home</button>
        <button className='button' onClick=''>Reset</button>
        <button className='button' onClick=''>Logo</button>
      </div>
    }
}