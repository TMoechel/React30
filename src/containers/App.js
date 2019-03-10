import React, { Component } from 'react';
import './App.css';
import Home from '../components/Home';
import About from '../components/About';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="*" component={Home} />
        </Switch>
      </Router>
    );
  }
}

export default App;
