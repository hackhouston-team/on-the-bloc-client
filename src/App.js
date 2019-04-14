import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import blockstack from 'blockstack';
import apiService from './services/apiService';

import Navigation from './components/navigation/navigation';
// import Footer from './components/footer/footer';
// import Home from './components/home/home';
// import Jobs from './components/jobs/jobs';
import './App.css';
import Login from './components/login/login';
import Blocs from './components/bloc/blockList';

class App extends Component {
  state = {
    isSignedIn: null,
    personInfo: null
  };

  async componentDidMount() {
    let personInfo = {};
    const isSignedIn = await this.checkSignedInStatus();
    if (isSignedIn) {
      personInfo = await this.loadPerson();
    }
    this.setState(() => ({ isSignedIn, personInfo }));
  }

  // login methonds
  checkSignedInStatus = () => {
    if (blockstack.isUserSignedIn()) {
      return true;
    } else if (blockstack.isSignInPending()) {
      blockstack.handlePendingSignIn().then(function(userData) {
        window.location = window.location.origin;
      });
      return false;
    }
  };

  loadPerson = () => {
    let username = blockstack.loadUserData().username;

    blockstack.lookupProfile(username).then(person => {
      this.setState({ person, username });
    });
  };

  handleSignIn = event => {
    event.preventDefault();
    blockstack.redirectToSignIn();
  };

  handleSignOut = event => {
    event.preventDefault();
    this.setState(
      () => ({ isSignedIn: false }),
      () => blockstack.signUserOut(this.props.history.push('/homepage'))
    );
  };

  // user methods
  getUserById = async id => {
    return await apiService.getUser(id);
  };

  createUser = async name => {
    return await apiService.createUser(name);
  };

  // bloc methods
  getBlocById = async id => {
    return await apiService.getBloc(id);
  };

  createBloc = async (creatorId, blocName) => {
    return await apiService.postBloc(creatorId, blocName);
  };

  addMessageToBloc = async (creatorId, blocId, content) => {
    return await apiService.postBlocMessage(creatorId, blocId, content);
  };

  render() {
    const { isSignedIn } = this.state;
    return (
      <div>
        <Navigation />
        <Route
          path="/"
          exact={true}
          render={props => (
            <Login
              isSignedIn={isSignedIn}
              handleSignIn={this.handleSignIn}
              handleSignOut={this.handleSignOut}
              {...props}
            />
          )}
        />
        <Route path="/blocs" exact={true} component={Blocs} />
        {/* <Footer /> */}
      </div>
    );
  }
}

export default withRouter(App);
