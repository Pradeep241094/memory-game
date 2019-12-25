import { saveSettings } from '../utils/gameState.js'
  
  const getPlayersSize = (player) => {
    switch (player) {
      case 'onePlayer' :
        return 1
      case 'twoPlayers' :
        return 2
      case 'threePlayers' : 
        return 3
      default: 
        return 1
    }
  } 
  const setPlayers = (player) => {
    saveSettings({
      playerSize : getPlayersSize(player)
    })
  }
  
  export {
      getPlayersSize
  }

  export default setPlayers

  