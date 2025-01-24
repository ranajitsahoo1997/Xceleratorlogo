import React from 'react'
import "./SplashScreen.css"
import Logo from '../Logo/Logo'

function SplashScreen() {
  return (
    <div className="splashScreen row">
      <div className="container">
        <Logo />
        {/* <Name /> */}
      </div>
    </div>
  )
}

export default SplashScreen