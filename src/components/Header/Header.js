import React from 'react'
import { NavLink } from 'react-router-dom'

const logo = require('./images/logo.svg')

// Header which shows the Main menu, Reset Game, 
const Header = ({ className, currentScore, playerSequence}) => (
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
    <div style={{padding: 0, margin: 0}}>
    <p>Player Sequence: {playerSequence + 1}</p>
    {currentScore[playerSequence] !== undefined ?
    <div>
     <p>Current Score: {currentScore[playerSequence]}</p>
     </div>
      :
     <p>Current Score: 0</p>
    }
    </div>
  </header>
)
export default Header
