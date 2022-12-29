import { Container, Image } from "react-bootstrap";
import styled, { keyframes } from "styled-components";

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
  background-color: #000000;
  position: fixed;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  z-index: -1;

  @media (max-width: 991px) {
    width: 100%;
  }
`;

export const WelcomeContainer = styled.div`
  font-size: 20px;
  font-weight: 300;
  color: #ffffff;

  p {
    margin: 0;
  }
`;

export const Heading1 = styled.h1`
  color: #000000;
  letter-spacing: 5px;

  @media (max-width: 991px) {
    color: #ffffff;
    text-align: center;
    font-size: 50px;
  }

  @media (min-width: 992px) and (max-width: 1199px) {
    font-size: 69px !important;
  }

  @media (min-width: 1200px) and (max-width: 1399px) {
    font-size: 84px;
  }

  @media (min-width: 1400px) {
    font-size: 152px;
  }
`;

export const ParagraphLight = styled.p`
  color: #ffffff;
  font-weight: 200;
  font-size: 20px;

  @media (max-width: 991px) {
    font-size: 16px;
  }
`;

export const Span = styled.span`
  color: #ffffff;
`;

export const ImageStyled = styled(Image)`
  @media (max-width: 991px) {
    width: 125px;
  }

  @media (min-width: 992px) and (max-width: 1199px) {
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
    color: #ffffff;
    background: linear-gradient(180deg, #e24e70 4.41%, #774c9e 104.61%);
    background-clip: text;
    -webkit-background-clip: text;

    @media (min-width: 992px) {
      color: #000000;

      .light {
        color: #ffffff;
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
      color: rgba(0, 0, 0, 0);
    }
  }

  @media (min-width: 576px) and (max-width: 991px) {
    gap: 5rem;
  }

  @media (min-width: 992px) and (max-width: 1199px) {
    gap: 9rem;
  }

  @media (min-width: 1200px) {
    gap: 11rem;
  }
`;

export const DevNameContainer = styled.div`
  h3 {
    font-size: 16px;
    color: #000000;

    @media (max-width: 991px) {
      color: #ffffff;
    }
  }
`;

export const Division = styled.hr`
  background-color: #000000;
  height: 1px;
  border: 0;
  opacity: 1;
  width: 100%;

  &::after {
    width: 25.1%;
    height: 1px;
    content: "";
    border: 1px solid #ffffff;

    @media (min-width: 1400px) {
      width: 33.35%;
    }
  }

  @media (max-width: 991px) {
    background-color: #ffffff;
  }
`;
