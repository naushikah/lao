import { Col, Row } from "react-bootstrap";
import {
  BackgroundDark,
  WelcomeContainer,
  Heading1,
  Span,
  ImageStyled as Image,
  MenuContainer,
  ParagraphLight,
  DevNameContainer,
  Division,
  HomeContainer,
} from "./styles";
import { LogoMain } from "../../assets/images";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <BackgroundDark />
      <HomeContainer className="py-5 my-5">
        <Row className="pt-3 pt-lg-5 mt-lg-5">
          <Col
            lg={4}
            xxl={3}
            className="d-flex justify-content-center justify-content-lg-end p-lg-0 pt-lg-5"
          >
            <Image src={LogoMain} />
          </Col>
          <Col className="pt-5 pt-lg-5 p-lg-0 ">
            <ParagraphLight className="text-center d-lg-none">
              seja bem vindo(a) ao meu
            </ParagraphLight>
            <WelcomeContainer className="d-none d-lg-block">
              <p>seja</p>
              <p>bem vindo(a)</p>
              <p>ao meu</p>
            </WelcomeContainer>
            <Heading1>
              <Span>port</Span>fólio.
            </Heading1>
          </Col>
        </Row>
        <Row className="py-5 mb-5">
          <Col className="p-lg-0" lg={{ offset: 4 }} xxl={{ offset: 3 }}>
            <Division className="d-flex" />
            <MenuContainer className="d-flex flex-column flex-sm-row justify-content-center text-center">
              <Link to={"/projetos"}>
                <span className="light">projetos</span>
              </Link>
              <Link to={"/sobre"}>sobre</Link>
              <Link to={"/contato"}>contato</Link>
            </MenuContainer>
          </Col>
        </Row>
        <DevNameContainer className="pt-5 d-flex justify-content-center justify-content-lg-end">
          <h3>Lesliê Aparecida Oliveira</h3>
        </DevNameContainer>
      </HomeContainer>
    </>
  );
};

export default Home;
