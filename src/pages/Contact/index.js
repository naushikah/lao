import { Col, Row } from "react-bootstrap";
// import { Link } from "react-router-dom";
import {
  NetworksIcon,
  SubHeaderDark,
  RowStyled,
  ContactContainer as Container,
} from "./styles";
import { Email, Github, Linkedin } from "../../assets/icons";

const Contact = () => {
  const icons = [
    { name: "E-mail", icon: Email, info: "leslieapoliveira@gmail.com" },
    { name: "Linkedin", icon: Linkedin, info: "Lesliê Oliveira" },
    { name: "Github", icon: Github, info: "@Naushikah" },
  ];

  return (
    <>
      <SubHeaderDark />
      <Container>
        <Row className="mb-5 pb-3">
          <Col>
            <h1>Contato</h1>
          </Col>
        </Row>
        <RowStyled className="justify-content-center text-center">
          {icons.map(({ name, icon, info }) => (
            <Col
              key={name}
              lg={2}
              className={"d-flex align-items-center flex-column mb-5 pb-3"}
            >
              <NetworksIcon className={"mb-3"} image={icon} />
              <h2>{name}</h2>
              <h3>{info}</h3>
            </Col>
          ))}
        </RowStyled>
        {/* <Link to="/">Home</Link> */}
      </Container>
    </>
  );
};

export default Contact;
