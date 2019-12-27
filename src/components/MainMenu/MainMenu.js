import React from 'react'
import { Link } from 'react-router-dom'

const logo = require('../../components/Card/images/santa.svg')

const MainMenu = ({ className }) => (
  <div className={className}>
      <div className="Header__logo">
      <img
        alt="logo"
        className="Header__logoImage"
        src={logo}
      />
    </div>
       <button style={{backgroundColor: 'grey'}}>
       <Link to="/game"><h4 style={{margin: 0, padding: 0, color: 'white'}}>Resume Game</h4></Link>
       </button>
       <br></br><br></br>
        <Link to="/new-game"><h4 style={{margin: 0, padding: 0, color: 'white'}}>New Game</h4></Link>
  </div>
)

export default MainMenu
