import React from 'react';
import { chunk } from 'lodash'

import {
  Card,
  Header
} from '../../components'

const Cards = ({ cards, currentScore,playerSequence, className, onClick }) => {
  const chunkedCards = chunk(cards, 6); // out of the available cards, create an row with 6 cards accessed in the chunk.
  
  return (
    <div className={className}>
      <Header currentScore = {currentScore} playerSequence = {playerSequence}/>
      <div className="Cards__content" style={{marginTop: 100}}>
        {chunkedCards.map((cards, index) =>
          <ul key={index}>
            {cards.map((card, index) =>
              <Card
                className="Card"
                id={card.id}
                key={`${card.name}--${index}`}
                name={card.name}
                onClick={() => !card.show && onClick(card.id, card.name)}
                show={card.show}
              />
            )}
          </ul>
        )}
      </div>
    </div>
  )
}

export default Cards;
