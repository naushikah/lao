import styled, { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
  body {
    font-family: Poppins, Sans-Serif;
    background-color: #f0f0f0;
  }
`;

export const FooterStyled = styled.footer`
  z-index: 1;
  height: 5rem;
  width: 100%;
  background-color: #f0f0f0;
  position: fixed;
  bottom: 0;
`;