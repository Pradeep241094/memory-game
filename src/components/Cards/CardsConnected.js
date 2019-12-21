import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import {
  drop,
  random,
  shuffle
} from 'lodash'

import { getLevelCards } from '../../utils/setLevel';
import {
  loadGame,
  loadSettings,
  saveGame
} from '../../utils/gameState'
import Cards from './CardsStyled.js'

class CardsConnected extends Component {
  constructor(props) {
    super(props)

    this.handleCardClick = this.handleCardClick.bind(this)

    const cards = this.constructor.getCardStates()

    this.state = loadGame() ? loadGame() : {
      cards,
      cardAttempts: [],
      cardAttemptsCount: 0,
      gameFinished: false,
      currentScore: 0,
    }
  }

  // fetch the initial states of the cards from the library of the cards and generate pairs

  static getCardStates() {
    const selectedLevel = loadSettings('level');
    const cards = getLevelCards(selectedLevel);
    const cardStates = []
    const duplicatedCards = shuffle([...cards, ...cards])
    for (let i=0; i<duplicatedCards.length; i++) {
      cardStates.push({
        id: `${duplicatedCards[i]}-${random(0,999)}`,
        name: duplicatedCards[i],
        show: false
      })
    }

    return cardStates
  }
  
  // function to fetch the card index

  getCardIndex(id) {
    return this.state.cards.findIndex(card => {
      return card.id === id
    })
  }

  // add the cards to compare into the array and make a count of attempts.

  addCardAttempt(id, name) {
    const cardAttempts = this.state.cardAttempts
    cardAttempts.push({
      id,
      name
    });
    this.setState({
      cardAttempts,
      cardAttemptsCount: ++this.state.cardAttemptsCount
    })
  }

  // function to compare the cards based on the card name from the list created.

  compareCardAttempts() {
    const attempts = this.state.cardAttempts;
    return attempts[0].name === attempts[1].name;
  }

  // function to clear the previous card attempts

  clearPreviousCardAttempts() {
    const attempts = [...this.state.cardAttempts]

    this.setState({
      cardAttempts: drop(attempts, 2),
      cardAttemptsCount: 1
    })
  }

  // function to verify for the right card attempts and generatescores for the correct attempts.  

  verifyCardAttempts() {
    if (!this.compareCardAttempts()) {
      this.hideCard(this.state.cardAttempts[0].id)
      this.hideCard(this.state.cardAttempts[1].id)
    }
    this.generateScores(this.state.cards);
    this.clearPreviousCardAttempts()
  }

  // function to check if all the cards in the display are revealed.

  checkIfAllCardsAreRevealed() {
    const hiddenCards = this.state.cards.some(card => {
      return !card.show
    })
    return !hiddenCards
  }

  // function to open the card based on the click from the user.

  showCard(id) {
    const cardIndex = this.getCardIndex(id)
    const cards = [...this.state.cards]
    cards[cardIndex].show = true;
    this.setState({
      cards
    });
  }

  // function to close the card, if the match is not obtained.

  hideCard(id) {
    const cardIndex = this.getCardIndex(id)
    const cards = [...this.state.cards]
    cards[cardIndex].show = false;
    this.setState({
      cards
    })
  }

  saveGameState() {
    saveGame(this.state)
  }

  // function call when the game is completed.

  endGame() {
    setTimeout(
      () => {
        this.setState({
          gameFinished: true
        })
      }, 1500
    )
  }

  // function to click the card

  handleCardClick(cardId, cardName) {
    this.showCard(cardId);
    this.addCardAttempt(cardId, cardName)
    if (this.state.cardAttemptsCount === 3) {
      this.verifyCardAttempts()
    }
    if (this.checkIfAllCardsAreRevealed()) {
      this.endGame()
    }
    this.saveGameState();
  }

  // function to generate the scores 
  generateScores(cards){
    var cardsOpened = this.getNumberofCardsOpened(cards,"show");
  }

  // Function to generate the current score based on the number of cards revealed.

  getNumberofCardsOpened(input, field) { 
    var output = [];
    for (var i=0; i < input.length ; ++i)
         if(input[i][field] === true){
        output.push(input[i][field]);
         }
    this.setState({
      currentScore : Math.floor(output.length / 2)
    })
    console.log('>>>>>>>>>>>CurrentScore>>>>>>>>>>>>>>', this.state.currentScore);
}

// render function which shows the main layout of the cards  

render() {
    return this.state.gameFinished
      ? <Redirect to="/end-game" />
      :
      <Cards
          cards={this.state.cards}
          currentScore={this.state.currentScore}
          onClick={this.handleCardClick}
      />
  }
}

export default CardsConnected
