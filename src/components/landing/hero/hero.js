import * as React from 'react';
import { Component } from 'react';
import Login from '../../login/login'

import './hero.css';

class Hero extends Component {

  render() {
    const { isSignedIn,
      handleSignIn,
      handleSignOut } = this.props
    return (
      <section className="hero hero-about has-text-left has-background-white is-large is-marginless">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-centered">
              <div className="column">
                <h1 className="title has-text-black is-spaced is-size-1-desktop is-size-2-tablet is-size-3-mobile ">
                  Connect On The Bloc
                </h1>
                <Login
                  isSignedIn={isSignedIn}
                  handleSignIn={handleSignIn}
                  handleSignOut={handleSignOut}
                />
                <h2 className="subtitle is-size-4-desktop has-text-black">

                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Hero;