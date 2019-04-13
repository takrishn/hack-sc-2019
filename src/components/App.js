import React, { Component } from 'react';
import {HashRouter as Router, Route, Switch } from 'react-router-dom';

import Form from './form';
import Login from './login';

class App extends Component {
  constructor(props) {
    super(props);    
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Login}/>
          <Route exact path='/form' component={Form}/>
        </Switch>
      </Router>
      // <div className="App">
      //   <div className="App-container">

      //     <div className="login-container">
      //       <h2 className="login-header">Login</h2>
      //       <button>login</button>
      //     </div>

      //   </div>
      // </div>
    );
  }
}

export default App;
