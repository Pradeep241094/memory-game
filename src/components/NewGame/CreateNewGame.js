import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import { clearGame } from '../../utils/gameState.js'
import setLevel from '../../utils/setLevel.js'
import setPlayers from '../../utils/setPlayers.js'

import NewGame from './NewGameStyled';

class CreateNewGame extends Component {
  constructor(props) {
    super(props)
    this.state = {
      redirectToGame: false,
    }
    // this.handleLevelSelect = this.handleLevelSelect.bind(this);
    // this.setNumberOfPlayers = this.setNumberOfPlayers.bind(this);
  }

  // handle the difficulty level based on the user selection.
  
  handleLevelSelect = (level) => {
    clearGame();
    setLevel(level);
  }

  setNumberOfPlayers = (players) => {
    setPlayers(players);
    this.setState({
      redirectToGame: true,
    })
  }

  render() {
    return this.state.redirectToGame
      ? <Redirect to="/game" />
      : <NewGame
       onLevelSelect={this.handleLevelSelect} 
       onNumberofPlayersSelect={this.setNumberOfPlayers}
       />
  }
}

export default CreateNewGame
