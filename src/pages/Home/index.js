import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
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
} from "./styles";
import Logo from "../../assets/images/logo-main.svg";

const Home = () => {
  return (
    <>
      <BackgroundDark />
      <Container className="pt-lg-5 mt-5">
        <Row className="pt-lg-5 mt-lg-5">
          <Col
            lg={4}
            xxl={3}
            className="d-flex justify-content-center justify-content-lg-end p-lg-0"
          >
            <Image src={Logo} />
          </Col>
          <Col className="pt-5 p-lg-0">
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
        <Row className="pt-5 mt-5 mt-lg-0">
          <Col className="p-lg-0" lg={{ offset: 4 }} xxl={{ offset: 3 }}>
            <Division className="d-none d-lg-flex"/>
            <MenuContainer className="d-flex flex-column flex-sm-row justify-content-center text-center">
              <Link to="/projetos"><span>projetos</span></Link>
              <Link to="/sobre">sobre</Link>
              <Link to="/contato">contato</Link>
            </MenuContainer>
          </Col>
        </Row>
        <DevNameContainer className="d-flex justify-content-center justify-content-lg-start">
          <h3>Lesliê Aparecida Oliveira</h3>
        </DevNameContainer>
      </Container>
    </>
  );
};

export default Home;
