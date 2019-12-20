import React from 'react'

const LevelLink = ({ children, onClick, type }) => {
  const levelImage = require(`./images/level-${type}.svg`)

  return (
    <a onClick={onClick} className="NewGame__link">
      <img src={levelImage} alt="Level Easy" />
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
          Click Here to Start
        </LevelLink>
  </div>
)

export default NewGame
