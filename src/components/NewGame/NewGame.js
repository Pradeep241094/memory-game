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
  onLevelSelect
}) => (
  <div className={className}>
      <LevelLink
          type="easy"
          onClick={() => onLevelSelect('easy')}
        >
      <h1> 36 Cards (18 pairs) Easy</h1>
        </LevelLink>
        <LevelLink
          type="medium"
          onClick={() => onLevelSelect('medium')}
        >
        <h1>  48 Cards (24 Pairs) Medium</h1>
        </LevelLink>
      <br></br>
        <LevelLink
          type="hard"
          onClick={() => onLevelSelect('hard')}
        >
       <h1>  60 cards (30 pairs) Hard</h1>
        </LevelLink>
      <br></br>
  </div>
)

export default NewGame
