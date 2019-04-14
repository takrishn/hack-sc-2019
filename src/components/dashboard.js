import React, { Component } from 'react';
import '../styles/dashboard.css';
import HeaderComponent from './header';

class Dashboard extends Component {
  render() {
    return (
        <div className="Page">
            <HeaderComponent></HeaderComponent>
            <div className="Page-container">

                <div className="dash-container">
                    <h2 className="dash-header">Dashboard</h2>
                    <div>something</div>
                </div>
            </div>
        </div>
      
    );
  }
}

export default Dashboard;