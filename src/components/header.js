import React, { Component } from 'react';
import '../styles/header.css';
import Button from 'react-bootstrap/Button';

class HeaderComponent extends Component {
  render() {
    return (
        <div className="header-bar">
            <div className="title"><h2>HackSC</h2></div>
            <div className="logout-button"><Button className="btn" id="logout">Log Out</Button></div>
        </div>
      
    );
  }
}

export default HeaderComponent;
