import { Container, Row } from "react-bootstrap";
import styled from "styled-components";

export const DarkBackground = styled.div`
  height: 100vh;
  width: 50vw;
  background-color: #000;
  position: absolute;
  left: 0;
  z-index: -1;
`;

export const ContainerStyled = styled(Container)``;

export const Image = styled.img``;

export const RowStyled = styled(Row)`
  height: 80vh;
  align-items: center;
`;
