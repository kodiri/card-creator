import React, { Component } from 'react';
import './Navbar.css';


export default class Navbar extends Component {
  render() {
    return <div className='navbar'>
      <label className='navlogo'>Cherry Pick</label>
      <div className="buttons">
      <button onClick={this.props.saveProperty} className='button btn_save'>Save</button>
      <button onClick={this.props.resetProperties} className='button btn_rst'>Reset</button>
      </div>
    </div>
  }
}