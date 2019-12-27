import styled from 'styled-components'

import Cards from './Cards'

const CardsStyled = styled(Cards)`
  width: 100%;
  display: flex;
  background-image: linear-gradient(to bottom,#1B2632, #B2DCEF, #1B2632);
  flex-direction: column;
  align-items: center;
  
  .Cards__content {
    margin: 115px 0px 15px 0px;
    width: 100%;
    max-width: 1000px;
  }

  ul {
    display: flex;
    justify-content: space-between;
    list-style: none;
    margin: 0;
    padding: 0;
  }
`

export default CardsStyled
