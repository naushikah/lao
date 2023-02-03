import {
  FullNameContainer,
  HeadingLastName,
  HeadingName,
  Paragraph,
} from "./styles";

const Content = ({ data }) => {
  const { primary, secondary, subtitles } = data;

  return (
    <>
      {subtitles.map(({ title }) => (
        <Paragraph key={title}>{title}</Paragraph>
      ))}
      <FullNameContainer>
        <HeadingName>{primary}</HeadingName>
        <HeadingLastName>{secondary}</HeadingLastName>
      </FullNameContainer>
    </>
  );
};

export default Content;
