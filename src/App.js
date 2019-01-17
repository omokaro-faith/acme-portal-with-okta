import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import Staff from './components/pages/Staff';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
            <Route path="/" exact component={Home} />
            <Route path="/staff" component={Staff} />
        </div>
      </Router>
    );
  }
}

export default App;
