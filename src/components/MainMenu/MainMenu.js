import React from 'react'
import { Link } from 'react-router-dom'

const MainMenu = ({ className }) => (
  <div className={className}>
        <Link to="/game">Resume game</Link>
        <br></br>
        <Link to="/new-game">New game</Link>
  </div>
)

export default MainMenu
