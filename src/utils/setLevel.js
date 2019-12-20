import {
  dropRight,
  shuffle
} from 'lodash';

import cards from '../config/cards.js'
// import { saveSettings } from '../utils/gameState.js'

const getLevelCards = (level) => {
  const shuffledCards = shuffle(cards)
  const boardSize = 36;

  const elementsToDropAmount = shuffledCards.length - boardSize;

  console.log(">>>>>>>>>>>>>>>>>>>>Elements to Drop Amount>>>>>", elementsToDropAmount);

  return dropRight(shuffledCards, elementsToDropAmount)
}

export {
  getLevelCards
}
