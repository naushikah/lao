import styled from "styled-components";
import { color, maxWidth } from "../../variables.css";

export const Paragraph = styled.p`
  color: ${color.black};
  font-size: 20px;
  margin-bottom: 0;

  @media ${maxWidth.lg} {
    font-size: 16px;
  }
`;

export const FullNameContainer = styled.div``;

export const HeadingName = styled.h1`
  background: ${color.pinkPurple};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 100px;
  letter-spacing: 0.07em;
`;

export const HeadingLastName = styled.h2`
  letter-spacing: 0.07em;
  background: ${color.pinkPurple};
  opacity: 0.7;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 40px;
`;
