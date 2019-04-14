import React from 'react';
import Image from './pexels-photo-18888832.jpeg'
import image from './images.png'
import Image2 from './blockchain-tech.jpg'
import Hero from './hero/hero'
import About from './about/about'


const Landing = (props) => {
  const {
    isSignedIn,
    handleSignIn,
    handleSignOut } = props

  return (
    <div className="home">
      <Hero
        isSignedIn={isSignedIn}
        handleSignIn={handleSignIn}
        handleSignOut={handleSignOut}
      />
      <About />
    </div>
  )
}

export default Landing;