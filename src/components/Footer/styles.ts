import styled from "styled-components"

import { colors } from "../../styles/GlobalStyle"

export const Footer = styled.footer`
  /* Rodapé */
  background-color: ${colors.third};
  height: 3rem;
  img {
    height: 100%;
    padding: 0.4rem;
  }
  @media (max-width: 768px) {
    height: 2.5rem;
  }
`
