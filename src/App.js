import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Navigation from './components/navigation/navigation';
// import Footer from './components/footer/footer';
// import Home from './components/home/home';
// import Jobs from './components/jobs/jobs';
import './App.css';
import Login from './components/login/login';

class App extends Component {
   render() {
    return (
      <div>
        <Navigation />
        <Login />
        {/* <Route path="/" exact={true} component={Home} /> */}
        {/* <Route path="/jobs" exact={true} component={Jobs} /> */}
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
