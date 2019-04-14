import * as React from 'react';
import { Component } from 'react';

import './footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="footer has-background-white-ter">
        <div className="container">
          <div className="has-text-centered">
            <div className="nav-center">
              <a className="nav-item">
                <span className="icon is-large">
                  <i className="fab fa-twitter fa-2x" />
                </span>
              </a>
              <a className="nav-item">
                <span className="icon is-large">
                  <i className="fab fa-facebook fa-2x" />
                </span>
              </a>
              <a className="nav-item">
                <span className="icon is-large">
                  <i className="fab fa-github fa-2x" />
                </span>
              </a>
            </div>
            <p>
              &copy; {new Date().getFullYear()} On the Bloc. | All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;