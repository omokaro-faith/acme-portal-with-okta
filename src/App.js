import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react';

import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import Staff from './components/pages/Staff';
import LogIn from './components/auth/LogIn';

import './App.css';

const onAuthRequired = ({history}) => {
  history.push('/login');
}

class App extends Component {
  render() {
    return (
      <Router>
        <Security issuer={process.env.REACT_APP_BASE_URL}
                client_id={process.env.REACT_APP_CLIENT_ID}
                redirect_uri={window.location.origin + process.env.REACT_APP_CALLBACK_REDIRECT}
                onAuthRequired={onAuthRequired} >
          <div className="App">
            <Navbar />
            <div className="container">
              <Route path="/" exact component={Home} />
              <SecureRoute path="/staff" component={Staff} />
              <Route path='/login' 
                render={() => <LogIn
                baseUrl={process.env.REACT_APP_BASE_URL} />} />
              <Route path={process.env.REACT_APP_CALLBACK_REDIRECT} component={ImplicitCallback} />
            </div>
          </div>
        </Security>
      </Router>
    );
  }
}

export default App;
