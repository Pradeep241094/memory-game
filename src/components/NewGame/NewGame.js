import React from 'react'

const LevelLink = ({ children, onClick }) => {
  return (
    <a onClick={onClick} className="NewGame__link">
      {children}
    </a>
  )
}

const NewGame = ({
  className,
  onLevelSelect,
  onNumberofPlayersSelect,
}) => (
  <div className={className}>
      <LevelLink
          type="easy"
          onClick={() => onLevelSelect('easy')}
        >
      <h1 style= {{margin: 0, padding: 0}}> 36 Cards (18 pairs to match) Easy</h1>
        </LevelLink>
        <LevelLink
          type="medium"
          onClick={() => onLevelSelect('medium')}
        >
        <h1 style= {{margin: 0, padding: 0}}>48 Cards (24 Pairs to match) Medium</h1>
        </LevelLink>
        <LevelLink
          type="hard"
          onClick={() => onLevelSelect('hard')}
        >
       <h1 style= {{margin: 0, padding: 0}}>60 cards (30 pairs to match) Hard</h1>
        </LevelLink>
      <LevelLink
          type="onePlayer"
          onClick={() => onNumberofPlayersSelect('onePlayer')}
        >
      <h1 style= {{margin: 0, padding: 0}}>Single Player</h1>
        </LevelLink>
        <LevelLink
          type="twoPlayers"
          onClick={() => onNumberofPlayersSelect('twoPlayers')}
        >
        <h1 style= {{margin: 0, padding: 0}}>Two Players</h1>
        </LevelLink>
        <LevelLink
          type="threePlayers"
          onClick={() => onNumberofPlayersSelect('threePlayers')}
        >
       <h1 style= {{margin: 0, padding: 0}}>Three Players</h1>
        </LevelLink>
      <br></br>
  </div>
)
export default NewGame
