import { Container, Row } from "react-bootstrap";
import styled from "styled-components";
import { color, maxWidth } from "../../../variables.css";

export const DarkBackground = styled.div`
  height: 100vh;
  width: 50vw;
  background-color: ${color.black};
  position: absolute;
  left: 0;
  z-index: -1;
`;

export const ContainerStyled = styled(Container)`
  height: 90vh;
`;

export const Image = styled.img`
  width: 100%;

  @media ${maxWidth.sm} {
    width: 18rem;
    display: flex;
    justify-content: center;
  }
`;

export const RowStyled = styled(Row)`
  height: 80vh;
  align-items: center;
`;
