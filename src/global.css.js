import { Navbar } from "react-bootstrap";
import styled, { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
  body {
    font-family: Poppins, Sans-Serif;
    background-color: #f0f0f0;
  }
`;

export const NavbarStyled = styled(Navbar)`
  height: 4rem;
  background-color: #f0f0f0;
`;

export const FooterStyled = styled.footer`
  height: 4rem;
  background-color: #f0f0f0;
`;
