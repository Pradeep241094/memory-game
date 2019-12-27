import React from 'react'

const findWinner = (finallist) => {
  const finalScoreList = finallist
  let winningScore = Math.max(...finalScoreList);
  let winnersList = [];
  finalScoreList.forEach( (score, index) => {
    if(score == winningScore)
      winnersList.push(index+1);
  });
  return winnersList;
 }

const EndGame = ({ className }) => {
  const victoryImage = require('./images/gify.gif')
  const winnerList = findWinner(Object.values(JSON.parse(window.localStorage.memoryGame).state.playerScores))
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
      <h4>Player {winnerList}</h4>
      <br />
      <a href="/new-game" className="newGameLink">
      <h4>Play again</h4>
      </a>
    </div>
  )
}

export default EndGame
