import { Container } from "react-bootstrap";
import styled, { createGlobalStyle, keyframes } from "styled-components";
import { color } from "./variables.css";

export const Global = createGlobalStyle`
  body {
    font-family: Poppins, Sans-Serif;
    background-color: ${color.gray};
  }
`;

export const FooterStyled = styled.footer`
  z-index: 1;
  height: 5rem;
  width: 100%;
  background-color: ${color.gray};
  position: fixed;
  bottom: 0;
`;

export const AnimationKeyframes = keyframes`
0% { opacity: 0; }
100% { opacity: 1; }
`;

export const AnimationContainer = styled(Container)`
opacity: 1;
animation-name: ${AnimationKeyframes};
animation-timing-function: ease-in;
animation-duration: 3s;
`;