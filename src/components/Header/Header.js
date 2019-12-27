import React from 'react'
import { NavLink } from 'react-router-dom'
import {resetGame} from '../../utils/gameState';

const logo = require('./images/logo.svg')


// Header which shows the Main menu, Reset Game, 
const Header = ({ className, currentScore, playerSequence, timer, selectedPlayers}) => (
  <header className={className}>
    <div className="Header__logo">
      <img
        alt="logo"
        className="Header__logoImage"
        src={logo}
      />
      <h3>Memory game</h3>
    </div>
    <div className="Header__logo">
      {selectedPlayers > 1 ?
        <h4>Multiplayer Mode: {selectedPlayers} Players</h4>
        : 
        <h4> Single Player Mode</h4>
      }
    </div>
    <div><h4>Time Elapsed: {timer}</h4></div>
    <div style={{padding: 0, margin: 0}}>
    <h4>Player Sequence: {playerSequence + 1}</h4>
    {currentScore[playerSequence] !== undefined ?
    <div>
     <h4>Current Score: {currentScore[playerSequence]}</h4>
     </div>
      :
     <h4>Current Score: 0</h4>
    }
    </div>
    <NavLink to="/menu" className="backToMenuLink">
      Back to main menu
    </NavLink>
    <NavLink to="/new-game" onClick={() => resetGame()} className="backToMenuLink">
      Reset Game
    </NavLink>
  </header>
)
export default Header
