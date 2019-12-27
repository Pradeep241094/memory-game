import styled from 'styled-components'

import { colors } from '../../styles/variables.js'
import MainMenu from './MainMenu.js'

const MainMenuStyled = styled(MainMenu)`
  width: 100%;
  text-align: center;
  background-image: linear-gradient(to bottom, #1B2632, #B2DCEF);
  
  a {
    color: ${colors.white};
    font-size: 60px;
    text-decoration: none;
  }
`

export default MainMenuStyled
