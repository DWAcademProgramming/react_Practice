import React from 'react'
import axios from 'axios'
import logo from '../../../src/img/logo.png'


const Header = () => {

  return (
    <header className="center">
        <img src={logo} alt="logo" />
    </header>
  )
}

export default Header