// import {
//   dropRight,
//   shuffle
// } from 'lodash';

// import cards from '../config/cards.js'
// // import { saveSettings } from '../utils/gameState.js'

// const getLevelCards = (level) => {
//   const shuffledCards = shuffle(cards)
//   const boardSize = 36;

//   const elementsToDropAmount = shuffledCards.length - boardSize;

//   console.log(">>>>>>>>>>>>>>>>>>>>Elements to Drop Amount>>>>>", elementsToDropAmount);

//   return dropRight(shuffledCards, elementsToDropAmount)
// }

// export {
//   getLevelCards
// }

import {
  dropRight,
  shuffle
} from 'lodash'

import cards from '../config/cards.js'
import { saveSettings } from '../utils/gameState.js'

const getBoardSize = (level) => {
  switch (level) {
    case 'ease':
      return 18
    case 'medium':
      return 24
    case 'hard':
      return 30

    default:
      return 18
  }
}

const getLevelCards = (level) => {
  const shuffledCards = shuffle(cards)
  const boardSize = getBoardSize(level)

  const elementsToDropAmount = shuffledCards.length - boardSize

  return dropRight(shuffledCards, elementsToDropAmount)
}

const setLevel = (level) => {
  saveSettings({
    level
  })
}

export {
  getLevelCards
}

export default setLevel
