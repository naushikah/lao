import { Container, Row } from "react-bootstrap";
import styled from "styled-components";

export const SubHeaderDark = styled.div`
  background-color: #000000;
  min-height: 670px;
  position: absolute;
  width: 100%;
  z-index: -1;
`;

export const ContactContainer = styled(Container)`
  padding-top: 242px;
  margin-bottom: 80px;

  & h1 {
    font-size: 80px;
    text-align: center;
    color: #ffffff;
  }

  & h2 {
    font-size: 20px;
    font-weight: bold;
    color: #f0f0f0;
    margin-bottom: 94px;
  }

  & h3 {
    font-size: 16px;
    color: #000;
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
`;

export const RowStyled = styled(Row)`
  gap: 111px;
`;
