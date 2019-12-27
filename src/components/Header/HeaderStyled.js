import styled from 'styled-components'

import Header from './Header.js'

const HeaderStyled = styled(Header)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 20px;
  background-color: #1B2632;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  z-index: 10;
  box-shadow: 0 0 3px #000;
  
  .Header__logo {
    display: flex;
    align-items: center;
  }
  
  .Header__logoImage {
    width: 50px;
  }
  
  .backToMenuLink {
    color: #fff;
    text-decoration: none;
  }
`
export default HeaderStyled
