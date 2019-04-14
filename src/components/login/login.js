import React from 'react'


const Login = ({ isSignedIn, handleSignIn, handleSignOut }) => {
  return (
    <div>
      <p style={{ display: isSignedIn ? 'none' : 'block' }}>
        <button onClick={handleSignIn}>
          Sign-in with Blockstack
          </button>
      </p>
      <p style={{ display: !isSignedIn ? 'none' : 'block' }}>
        <button onClick={handleSignOut}>
          Sign-out
          </button>
      </p>
    </div>
  )
}

export default Login