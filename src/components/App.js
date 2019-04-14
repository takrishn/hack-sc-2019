import React, { Component } from 'react';
import {HashRouter as Router, Route, Switch } from 'react-router-dom';

import Form from './form';
import Form2 from './form2';
import Login from './login';
import Dashboard from './dashboard';

class App extends Component {
  
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Login}/>
          <Route path='/form' component={Form}/>
          <Route path='/form2' component={Form2}/>
          <Route path='/dashboard' component={Dashboard}/>
          {/* <Route exact path='/form' component={Form}/> */}
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
