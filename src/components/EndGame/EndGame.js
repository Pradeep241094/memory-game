import React from 'react'

const EndGame = ({ className }) => {
  const victoryImage = require('./images/gify.gif')

  return (
    <div className={className}>
      <img
        src={victoryImage}
        alt="You won"
        className="youWonImage"
      />

      <h4 className="youWonText">
        Congratulations!<br />You won!
      </h4>

      <br />

      <a href="/new-game" className="newGameLink">
      <h4>Play again</h4>
      </a>
    </div>
  )
}

export default EndGame
