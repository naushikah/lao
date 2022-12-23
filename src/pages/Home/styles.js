import { Image } from "react-bootstrap";
import styled from "styled-components";

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
    height: 50%;
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
`;

export const Span = styled.span`
  color: #ffffff;
`;

export const ImageStyled = styled(Image)`
  @media (max-width: 991px) {
    width: 200px;
  }

  @media (min-width: 992px) and (max-width: 1199px) {
    width: 300px;
  }
`;

export const MenuContainer = styled.div`
  gap: 1rem;

  a {
    font-size: 20px;
    letter-spacing: 1px;
    text-decoration: none;
    color: #000000;

    @media (min-width: 992px) {
      span {
        color: #ffffff;
      }
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
    font-size: 20px;
    position: absolute;
    bottom: 101px;
    @media (min-width: 992px) {
      right: 101px;
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
    content: '';
    border: 1px solid #ffffff;

    @media (min-width: 1400px) {
      width: 33.35%;
    }
  }
`;
