import { Container, Image } from "react-bootstrap";
import styled, { keyframes } from "styled-components";
import { color, maxWidth, minWidth } from "../../variables.css";

const animation = keyframes`
  0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
`;

export const HomeContainer = styled(Container)`
  opacity: 1;
  animation-name: ${animation};
  animation-timing-function: ease-in;
  animation-duration: 3s;
`;

export const BackgroundDark = styled.div`
  background-color: ${color.black};
  position: fixed;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  z-index: -1;

  @media ${maxWidth.lg} {
    width: 100%;
  }
`;

export const WelcomeContainer = styled.div`
  font-size: 20px;
  font-weight: 300;
  color: ${color.white};

  p {
    margin: 0;
  }
`;

export const Heading1 = styled.h1`
  color: ${color.black};
  letter-spacing: 5px;

  @media ${maxWidth.lg} {
    color: ${color.white};
    text-align: center;
    font-size: 50px;
  }

  @media ${minWidth.lg} and ${maxWidth.xl} {
    font-size: 69px !important;
  }

  @media ${minWidth.xl} and ${maxWidth.xxl} {
    font-size: 84px;
  }

  @media ${minWidth.xxl} {
    font-size: 152px;
  }
`;

export const ParagraphLight = styled.p`
  color: ${color.white};
  font-weight: 200;
  font-size: 20px;

  @media ${maxWidth.lg} {
    font-size: 16px;
  }
`;

export const Span = styled.span`
  color: ${color.white};
`;

export const ImageStyled = styled(Image)`
  @media ${maxWidth.lg} {
    width: 125px;
  }

  @media ${minWidth.lg} and ${maxWidth.xl} {
    width: 300px;
  }
`;

export const MenuContainer = styled.div`
  gap: 1rem;

  a {
    flex: 1;
    font-size: 20px;
    letter-spacing: 1px;
    text-decoration: none;
    color: ${color.white};
    background: ${color.pinkPurple};
    background-clip: text;
    -webkit-background-clip: text;

    @media ${minWidth.lg} {
      color: ${color.black};

      .light {
        color: ${color.white};
      }
    }

    &,
    .light {
      transition: color 0.5s ease-in-out;
    }

    &:hover,
    &:focus,
    .light:hover,
    .light:focus {
      color: transparent;
    }
  }

  @media ${minWidth.sm} and ${maxWidth.lg} {
    gap: 5rem;
  }

  @media ${minWidth.lg} and ${maxWidth.xl} {
    gap: 9rem;
  }

  @media ${minWidth.xl} {
    gap: 11rem;
  }
`;

export const DevNameContainer = styled.div`
  h3 {
    font-size: 16px;
    color: ${color.black};

    @media ${maxWidth.lg} {
      color: ${color.white};
    }
  }
`;

export const Division = styled.hr`
  background-color: ${color.black};
  height: 1px;
  border: 0;
  opacity: 1;
  width: 100%;

  &::after {
    width: 25.1%;
    height: 1px;
    content: "";
    border: 1px solid ${color.white};

    @media ${minWidth.xxl} {
      width: 33.35%;
    }
  }

  @media ${maxWidth.lg} {
    background-color: ${color.white};
  }
`;
