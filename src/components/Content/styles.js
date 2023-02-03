import styled from "styled-components";
import { maxWidth } from "../../variables.css";

export const Paragraph = styled.p`
  color: #000000;
  font-size: 20px;
  margin-bottom: 0;

  @media ${maxWidth.lg} {
    font-size: 16px;
  }
`;

export const FullNameContainer = styled.div``;

export const HeadingName = styled.h1`
  background: linear-gradient(180deg, #e24e70 4%, #774c9e 119.33%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 100px;
  letter-spacing: 0.07em;
`;

export const HeadingLastName = styled.h2`
  letter-spacing: 0.07em;
  background: linear-gradient(
    180deg,
    rgba(226, 78, 112, 0.7) 4%,
    rgba(119, 76, 158, 0.7) 119.33%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 40px;
`;
