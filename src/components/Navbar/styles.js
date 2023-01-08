import { Container, Image, Nav, Navbar } from "react-bootstrap";
import styled, { keyframes } from "styled-components";

const animation = keyframes`
  0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
`;

export const NavbarContainer = styled(Container)`
  opacity: 1;
  animation-name: ${animation};
  animation-timing-function: ease-in;
  animation-duration: 3s;
`;

export const NavbarStyled = styled(Navbar)`
  z-index: 1;
  top: 0;
  position: fixed;
  width: 100%;
  height: 5rem;
  background-color: #f0f0f0;
`;

export const NavStyled = styled(Nav)`
  gap: 40px;

  & a {
    font-size: 20px;
    padding: 0px !important;
    display: inline-block;
    position: relative;
    text-decoration: none;
    color: #000000;

    &.active {
      text-decoration: underline;
      text-underline-offset: 15px;
      text-decoration-thickness: 1px;
    }

    &:after {
      content: "";
      position: absolute;
      width: 100%;
      transform: scaleX(0);
      height: 1px;
      bottom: -8px;
      left: 0;
      background-color: #000000;
      transform-origin: bottom right;
      transition: transform 0.25s ease-out;
    }

    &:hover:after {
      transform: scaleX(1);
      transform-origin: bottom left;
    }
  }
`;

export const ImageStyled = styled(Image)`
  &:hover {
    opacity: 0.6;
    transition: all 0.5s ease-out;
  }
`;
