import React, { Component } from 'react';
import '../styles/login.css';
import {HashRouter as Router, Link } from 'react-router-dom';

class Login extends Component {
  render() {
    return (
        <Router>
            <div className="App">
                <div className="App-container">

                <div className="login-container">
                    <h2 className="login-header">HackSC</h2>
                    <Link to="/form">login using facebook</Link>
                </div>

                </div>
            </div>
        </Router>
      
    );
  }
}

export default Login;
