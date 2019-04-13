import React from 'react'
import blockstack from 'blockstack'

const handleLogin = () => {
  blockstack.redirectToSignIn()
}

const Login = () => {
  return (
    <button className="button is-primary" onClick={() => handleLogin()}>Login</button>
  )
}

export default Login