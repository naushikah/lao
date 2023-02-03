import { Container, Row } from "react-bootstrap";
import styled, { keyframes } from "styled-components";
import { maxWidth } from "../../variables.css";

const animation = keyframes`
  0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
`;

export const ContactPage = styled.div`
  opacity: 1;
  animation-name: ${animation};
  animation-timing-function: ease-in;
  animation-duration: 3s;

  @media ${maxWidth.md} {
    background-color: #000000;
  }
`;

export const SubHeaderDark = styled.div`
  background-color: #000000;
  min-height: 670px;
  position: absolute;
  width: 100%;
  z-index: -1;

  @media ${maxWidth.lg} {
    min-height: 590px;
  }
`;

export const ContactContainer = styled(Container)`
  padding-top: 242px;
  margin-bottom: 80px;

  & h1 {
    font-size: 80px;
    text-align: center;
    color: #ffffff;

    @media ${maxWidth.sm} {
      font-size: 50px;
    }
  }

  & h2 {
    font-size: 20px;
    font-weight: bold;
    color: #f0f0f0;
    margin-bottom: 94px;

    @media ${maxWidth.md} {
      margin-bottom: 15px;
    }
  }

  & a {
    text-decoration: none;

    & h3 {
      font-size: 16px;
      color: #000000;
      background: linear-gradient(180deg, #e24e70 4.41%, #774c9e 104.61%);
      background-clip: text;
      -webkit-background-clip: text;

      & {
        transition: color 0.5s ease-in-out;
      }

      &:hover,
      &:focus {
        color: rgba(0, 0, 0, 0);
      }

      @media ${maxWidth.md} {
        color: #ffffff;
      }
    }
  }

  @media ${maxWidth.md} {
    padding-top: 150px;
    padding-bottom: 50px;
  }
`;

export const NetworksIcon = styled.div`
  ${({ image }) => image && `background-image: url(${image});`}
  background-repeat: no-repeat;
  background-position: center;
  background-color: #f0f0f0;
  background-size: 100px;
  border-radius: 100%;
  height: 180px;
  width: 180px;

  @media ${maxWidth.lg} {
    background-size: 50px;
    height: 100px;
    width: 100px;
  }
`;

export const RowStyled = styled(Row)`
  gap: 111px;

  @media (max-width: 767px) {
    gap: 30px;
  }
`;
