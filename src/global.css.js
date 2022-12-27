import { Navbar } from "react-bootstrap";
import styled, { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
  body {
    font-family: Poppins, Sans-Serif;
    background-color: #f0f0f0;
  }
`;

export const NavbarStyled = styled(Navbar)` 
  z-index: 1;
  top: 0;
  position: fixed;
  width: 100%;
  height: 4rem;
  background-color: #f0f0f0;
`;

export const FooterStyled = styled.footer`
  z-index: 1;
  height: 64px;
  width: 100%;
  background-color: #f0f0f0;
  position: fixed;
  bottom: 0;
`;
