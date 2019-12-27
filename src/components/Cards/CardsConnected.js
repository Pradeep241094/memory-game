import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { drop, random, shuffle } from "lodash";

import { getLevelCards } from "../../utils/setLevel";
import getPlayersSize from "../../utils/setPlayers";
import {
  loadGame,
  loadSettings,
  saveSettings,
  saveGame
} from "../../utils/gameState";
import Cards from "./CardsStyled";

class CardsConnected extends Component {
  constructor(props) {
    super(props);

    this.handleCardClick = this.handleCardClick.bind(this);

    const cards = this.constructor.getCardStates();
    this.state = loadGame()
      ? loadGame()
      : {
          cards,
          cardAttempts: [],
          cardAttemptsCount: 0,
          gameFinished: false,
          currentScore: 0,
          clickNumber: 0,
          chances: 2,
          selectedPlayers: loadSettings("playerSize"),
          playerScores: {},
          playerSequence: 0,
          timer: undefined,
          intervalMethod: undefined
        };
    this.startTimer();
  }

  startTimer() {
    if (!this.state.intervalMethod) {
      this.state.intervalMethod = window.setInterval(() => {
        const initialTime = loadSettings("timer") || 1;
        saveSettings({
          timer: initialTime + 1
        });
        this.setState({
          timer: initialTime + 1
        });
      }, 1000);
    }
  }

  endTimer() {
    window.clearInterval(this.state.intervalMethod);
  }
  /* fetch the initial states of the cards from the library 
  of the cards and generate pairs */

  static getCardStates() {
    const selectedLevel = loadSettings("level");
    // console.log(">>>>>>>>>>>>.selectedLevel<<<<<<<<<", selectedLevel);
    const cards = getLevelCards(selectedLevel);
    const cardStates = [];
    const duplicatedCards = shuffle([...cards, ...cards]);
    for (let i = 0; i < duplicatedCards.length; i++) {
      cardStates.push({
        id: `${duplicatedCards[i]}-${random(0, 999)}`,
        name: duplicatedCards[i],
        show: false
      });
    }

    return cardStates;
  }

  // function to fetch the card index

  getCardIndex(id) {
    return this.state.cards.findIndex(card => {
      return card.id === id;
    });
  }

  setPlayerSize() {
    //set playersize to the function
    this.setState({
      selectedPlayers: loadSettings("playerSize")
    });
    return this.state.selectedPlayers;
  }

  // add the cards to compare into the array and make a count of attempts.

  addCardAttempt(id, name) {
    const cardAttempts = this.state.cardAttempts;
    cardAttempts.push({
      id,
      name
    });
    this.setState({
      cardAttempts,
      cardAttemptsCount: ++this.state.cardAttemptsCount
    });
  }

  // function to compare the cards based on the card name from the list created.

  compareCardAttempts() {
    const attempts = this.state.cardAttempts;
    return attempts[0].name === attempts[1].name;
  }

  // function to clear the previous card attempts

  clearPreviousCardAttempts() {
    const attempts = [...this.state.cardAttempts];

    this.setState({
      cardAttempts: drop(attempts, 2),
      cardAttemptsCount: 1
    });
  }

  /* function to verify for the right card attempts 
  and generatescores for the correct attempts. */

  verifyCardAttempts() {
    const { playerScores, playerSequence, cardAttempts } = this.state;
    if (!this.compareCardAttempts()) {
      this.hideCard(cardAttempts[0].id);
      this.hideCard(cardAttempts[1].id);
    } else {
      if (playerScores[playerSequence] == undefined) {
        playerScores[playerSequence] = 0;
      }
      ++playerScores[playerSequence];
    }
    this.clearPreviousCardAttempts();
  }

  // function to check if all the cards in the display are revealed.

  checkIfAllCardsAreRevealed() {
    const hiddenCards = this.state.cards.some(card => {
      return !card.show;
    });
    return !hiddenCards;
  }
  // function to open the card based on the click from the user.

  showCard(id) {
    const cardIndex = this.getCardIndex(id);
    const cards = [...this.state.cards];
    cards[cardIndex].show = true;
    const clickNumber = this.state.clickNumber + 1;
    this.setState({
      cards,
      clickNumber
    });
  }

  // function to close the card, if the match is not obtained.

  hideCard(id) {
    const cardIndex = this.getCardIndex(id);
    const cards = [...this.state.cards];
    cards[cardIndex].show = false;
    this.setState({
      cards
    });
  }

  saveGameState() {
    saveGame(this.state);
  }

  // function which ends the game.

  endGame() {
    setTimeout(() => {
      this.setState({
        gameFinished: true
      });
    }, 1500);
  }

  /* function to handle the card clicks */

  handleCardClick(cardId, cardName) {
    this.setState({
      playerSequence: this.generatePlayerSequence()
    });
    this.showCard(cardId);
    this.addCardAttempt(cardId, cardName);
    if (this.state.cardAttemptsCount === 3) {
      this.verifyCardAttempts();
    }
    if (this.checkIfAllCardsAreRevealed()) {
      this.endGame();
    }
    this.saveGameState();
  }

  /* function which generates the player sequence considering,
   the number chances, current Click of the User,
    and the selected players for the game */

  generatePlayerSequence() {
    const { selectedPlayers, chances, clickNumber } = this.state;
    var playerSequence = Math.floor(
      (clickNumber % (selectedPlayers * chances)) / chances
    );
    this.setState({
      playerSequence: playerSequence
    });
    return playerSequence;
  }

// to format the time in hours, minutes and seconds
  formatTime = (timer) => {
    let sec = timer % 60;
    sec = sec < 10 ? `0${sec}` : `${sec}`;
    let min = Math.floor(timer/60) % 3600;
    min = min < 10 ? `0${min}` : `${min}`;
    let hrs = Math.floor(timer/3600);
    hrs = hrs < 10 ? `0${hrs}` : `${hrs}`;
    return `${hrs}:${min}:${sec}`;
  }

  // render function which shows the main layout of the cards

  render() {
    const {
      gameFinished,
      playerSequence,
      playerScores,
      timer,
      cards,
      selectedPlayers,
      selectedLevel,
    } = this.state;
    // console.log(">>>>>>>>>>>>>>>>>Timer>>>>>>>>>>", this.formatTime(timer));
    return gameFinished ? (
      <Redirect to="/end-game" />
    ) : (
      <Cards
        cards={cards}
        currentScore={playerScores}
        playerSequence={playerSequence}
        selectedLevel={selectedLevel}
        selectedPlayers={selectedPlayers}
        onClick={this.handleCardClick}
        timer={this.formatTime(timer)}
      />
    );
  }
  componentWillUnmount() {
    this.endTimer();
  }
}

export default CardsConnected;
