import { Paragraph } from "./styles";

const Content = ({ subtitles }) => {

  return (
    <>
      {subtitles.map(({ title }) => (
        <Paragraph key={title}>{title}</Paragraph>
      ))}
    </>
  );
};

export default Content;
