import {
  dropRight,
  shuffle
} from 'lodash';

import cards from '../config/cards.js'
import { saveSettings } from '../utils/gameState.js'

const getBoardSize = (level) => { // generate board size.
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

// function to fetch the cards based on the levels from the library of cards.
const getLevelCards = (level) => {
  const shuffledCards = shuffle(cards);
  const layout = getBoardSize(level); // generate the board size based on the difficulty level

  const elementsToDropAmount = shuffledCards.length - layout

  return dropRight(shuffledCards, elementsToDropAmount) // array which slices based on the elements dropped.
}

// function to save the level based on the user input (easy, medium, hard) 
const setLevel = (level) => {
  saveSettings({
    level
  })
}

export {
  getLevelCards
}

export default setLevel
