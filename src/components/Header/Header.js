import React from 'react'
import { NavLink } from 'react-router-dom'

const logo = require('./images/logo.svg')

// Header which shows the Main menu, Reset Game, 
const Header = ({ className, currentScore }) => (
  <header className={className}>
    <div className="Header__logo">
      <img
        alt="logo"
        className="Header__logoImage"
        src={logo}
      />
      Memory game
    </div>
    <NavLink to="/menu" className="backToMenuLink">
      Back to main menu
    </NavLink>
    <NavLink to="/new-game" className="backToMenuLink">
      Reset Game
    </NavLink>
    <p>CurrentScore: {currentScore}</p>
  </header>
)

export default Header
