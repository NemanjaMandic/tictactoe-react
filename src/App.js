import React, { Component } from 'react';
import { Router, browserHistory } from 'react-router';
import Routes from './routes';

class App extends Component {
  render() {
    return (
      <Router 
        history={browserHistory}
        routes={Routes}
      />
    );
  }
}

export default App;
