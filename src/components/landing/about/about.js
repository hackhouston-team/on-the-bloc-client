import * as React from 'react';
import { Component } from 'react';
import server from '../pexels-photo-1888883.jpeg';
import vision from './vison.svg';

import './about.css';

class About extends Component {
  render() {
    return (
      <div>
        <section className="section has-text-centered has-bg-purple">
          <div className="container">
            <div className="columns">
              <div className="column is-vh-centered">
                <h1 className="title is-spaced is-size-desktop is-size-4-mobile has-text-white">
                  What we've built
                </h1>
                <h2 className="subtitle is-size-5-desktop has-text-white has-text-justified">
                  We created On The Bloc to give users the ability
                  to show the different parts of their lives without
                  the worry of privacy violation.
                  <br />
                  <br />
                  {/* We have crafted a complex algorithm to find the most exciting
                  and freshest job for everyon who visits our site. Endless
                  hours have been spent to build the best algorithm possible so
                  that we can deliver on our promise. */}
                </h2>
              </div>
              <div className="column ">
                {/* <figure className="image is-4by5">
                  <img src={server} alt="Gears" />
                </figure> */}
              </div>
            </div>
          </div>
        </section>
        <section className="section has-text-centered has-background-white">
          <div className="container">
            <div className="columns">
              <div className="column ">
                <figure className="image is-square">
                  <img src={vision} alt="Rocket" />
                </figure>
              </div>
              <div className="column is-vh-centered">
                <h1 className="title is-spaced is-size-desktop is-size-4-mobile has-text-black">
                  Our Vision
                </h1>
                <h2 className="subtitle is-size-5-desktop has-text-black has-text-justified">
                  Here On The Bloc we value the voice off all people.
                  In order to ensure that all voices are heard we have
                  developed a decentralized platform for connecting
                  like minded individuals.
                </h2>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default About;