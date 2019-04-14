import React from 'react'


const Login = ({ isSignedIn, handleSignIn, handleSignOut }) => {
  return (
    <div className="has-text-centered">
      <p style={{ display: isSignedIn ? 'none' : 'block' }}>
        <button
          className="button button-primary"
          onClick={handleSignIn}
        >
          Sign-in with Blockstack
          </button>
      </p>
      <p style={{ display: !isSignedIn ? 'none' : 'block' }}>
        <button
          className="button button-primary"
          onClick={handleSignOut}
        >
          Sign-out
        </button>
      </p>
    </div>
  )
}

export default Login