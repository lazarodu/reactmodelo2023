import styled from "styled-components"

import { colors } from "../../styles/GlobalStyle"

export const Header = styled.header`
  /* Cabeçalho */
  border-bottom: 0.4rem solid ${colors.third};
  display: flex;
  height: 6rem;
  picture {
    margin-left: 0.5rem;
    padding: 0.5rem;
    img {
      height: 100%;
    }
  }
  @media (max-width: 768px) {
    height: 4.5rem;
  }
`

export const NavBar = styled.nav`
  /* Navegação */
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: right;
  ul {
    list-style-type: none;
    display: flex;
    align-items: center;
    height: 100%;
    li {
      padding: 1rem;
      height: 100%;
      display: flex;
      align-items: center;
      a {
        text-decoration: none;
        color: var(--black);
      }
    }
    li:hover {
      background-color: ${colors.secondaryLight};
    }
  }
  input#menu-toggle {
    display: none;
  }
  @media (max-width: 500px) {
      position: fixed;
      margin-top: 1rem;
      align-items: baseline;
      ul {
        display: none;
        background-color: ${colors.white};
      li {
        text-align: left;
      }
    }
    label[for="menu-toggle"] {
      display: flex;
      justify-content: flex-end;
      cursor: pointer;
    }
    label[for="menu-toggle"] div.menu-hamburger {
      width: 35px;
      height: 15px;
      margin: 15px 2px 5px 5px;
    }
    label[for="menu-toggle"] div.menu-hamburger span.hamburger {
      position: relative;
      display: block;
      background-color: ${colors.black};
      width: 30px;
      height: 2px;
      border-radius: 1rem;
    }
    label[for="menu-toggle"] div.menu-hamburger span.hamburger:before,
    label[for="menu-toggle"] div.menu-hamburger span.hamburger:after {
      position: absolute;
      display: block;
      background-color: ${colors.black};
      width: 100%;
      height: 100%;
      content: "";
      border-radius: 1rem;
    }
    label[for="menu-toggle"] div.menu-hamburger span.hamburger:before {
      top: -10px;
    }
    label[for="menu-toggle"] div.menu-hamburger span.hamburger:after {
      bottom: -10px;
    }
    input:checked ~ ul {
      display: block;
      animation: fade-in 1s;
    }
    input:checked
      ~ label[for="menu-toggle"]
      div.menu-hamburger
      span.hamburger {
      transform: rotate(45deg);
      transition: 0.5s ease-in-out;
    }
    input:checked
      ~ label[for="menu-toggle"]
      div.menu-hamburger
      span.hamburger:before,
    input:checked
      ~ label[for="menu-toggle"]
      div.menu-hamburger
      span.hamburger:after {
      transform: rotate(90deg);
      transition: 0.5s ease-in-out;
    }
    input:checked
      ~ label[for="menu-toggle"]
      div.menu-hamburger
      span.hamburger:before {
      top: 0px;
    }
    input:checked
      ~ label[for="menu-toggle"]
      div.menu-hamburger
      span.hamburger:after {
      bottom: 0px;
    }
    @keyframes fade-in {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  }

`