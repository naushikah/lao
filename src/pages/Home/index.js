import { Col, Container, Row } from "react-bootstrap";
// import { Link } from "react-router-dom";
import {
  BackgroundDark,
  WelcomeContainer,
  Heading1,
  Span,
  ImageStyled as Image,
  MenuContainer,
  ParagraphLight,
} from "./styles";
import Logo from "../../assets/images/logo-main.svg";

const Home = () => {
  return (
    <>
      <BackgroundDark />
      <Container>
        <Row>
          <Col
            lg={4}
            xxl={3}
            className="d-flex justify-content-center justify-content-lg-end p-lg-0"
          >
            <Image src={Logo} />
          </Col>
          <Col className="p-lg-0">
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
        <Row>
          <Col className="p-lg-0" lg={{ offset: 4 }} xxl={{ offset: 3 }}>
            <hr></hr>
            <MenuContainer className="d-flex flex-column flex-sm-row justify-content-center">
              <h2>
                <Span>projetos</Span>
              </h2>
              <h2>sobre</h2>
              <h2>contato</h2>
            </MenuContainer>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>Lesliê Aparecida Oliveira</h3>
          </Col>
        </Row>
      </Container>
      {/* <Link to="/page2" className="App-link">
        Next Page
      </Link> */}
    </>
  );
};

export default Home;
