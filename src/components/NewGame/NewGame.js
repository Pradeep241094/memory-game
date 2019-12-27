import React from 'react'
import './../../styles/styles.css';
import { wrap } from 'module';

const LevelLink = ({ children, onClick }) => {
  return (
    <a onClick={onClick} className="NewGame__link">
      {children}
    </a>
  )
}

// Select the difficulty levels and Multiplayer mode window.
const NewGame = ({
  className,
  onLevelSelect,
  onNumberofPlayersSelect,
}) => (
  <div className={className}>
       <h1 style={{marginRight: 0, marginLeft: 0, textAlign: 'center', color: 'white'}}>Select Game Level</h1>
    <div 
    style={{
      display: 'flex',
      flexWrap: wrap,
    }}>
    <LevelLink
          type="easy"
          onClick={() => onLevelSelect('easy')}
        >
      <h1 style= {{margin: 0, padding: 0}}> Easy (18 Pairs)</h1>
        </LevelLink>
        <LevelLink
          type="medium"
          onClick={() => onLevelSelect('medium')}
        >
        <h1 style= {{margin: 0, padding: 0}}>Medium (24 Pairs)</h1>
        </LevelLink>
        <LevelLink
          type="hard"
          onClick={() => onLevelSelect('hard')}
        >
       <h1 style= {{margin: 0, padding: 0}}>Hard (30 Pairs)</h1>
        </LevelLink>
      </div>
      <h1 
      style={{marginRight: 0,
       marginLeft: 0, 
       textAlign: 'center', 
       color: 'white'
      }}>
      Select Number of Players</h1>
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
