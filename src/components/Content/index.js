import {
  ContentContainer,
  FullNameContainer,
  HeadingLastName,
  HeadingName,
  Paragraph,
  ParagraphGray,
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
      <ParagraphGray>
        Nasci na cidade de Franca, interior de São Paulo, no dia 11 de novembro
        de 1995.
      </ParagraphGray>
      <ContentContainer>
        <ParagraphGray>
          Conclui a graduação em Administração de Empresas no ano de 2018 no
          Centro Universitário Municipal de Franca Uni-FACEF e conquistei o
          Bacharelado em Engenharia de Software no ano de 2022 na mesma
          instituição de ensino. Atualmente atuo como desenvolvedora full stack.
          Minha enorme paixão é o front-end.
        </ParagraphGray>
        <ParagraphGray>
          Sou uma pessoa focada, esforçada, dedicada, perfeccionista, sempre em
          busca da aprendizagem, para me tornar uma pessoa melhor e contribuir
          com o mundo.
        </ParagraphGray>
      </ContentContainer>
    </>
  );
};

export default Content;
