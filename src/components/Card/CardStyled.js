import styled from 'styled-components'

import {
  colors,
  transitions
} from '../../styles/variables.js'
import Card from './Card.js'

// styled components 
const CardStyled = styled(Card)`
  width: 90px;
  height: 80px;
  position: relative;
  perspective: 200px;
  margin-bottom: 10px;

  .Card__element {
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    transform-style: preserve-3d;
    transition: opacity .2s ${transitions.nightBlue},
                transform 1.5s ${transitions.nightBlue};
    cursor: ${props => props.show ? 'default' : 'pointer'};
    user-select: none;

    ${props => !props.show &&
      `&:hover {
        opacity: .9
      }`
    };
    
    ${props => props.show &&
      `transform: rotateY(180deg)`
    };

    img {
      width: 50px;
    }
  }

  .Card__contents {
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    background-color: ${colors.nightBlue};
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
  }
  
  .Card__contents--front {
    transform: rotateY(180deg);
  }
  
  .Card__contents--back {
    color: ${colors.nightBlue};
    font-size: 50px;
  }
`

export default CardStyled
