import { Col, Row } from "react-bootstrap";
import {
  NetworksIcon,
  SubHeaderDark,
  RowStyled,
  ContactContainer as Container,
  ContactPage
} from "./styles";
import { Email, Github, Linkedin } from "../../assets/icons";

const Contact = () => {
  const icons = [
    {
      name: "E-mail",
      icon: Email,
      info: "leslieapoliveira@gmail.com",
      href: `mailto:leslieapoliveira@gmail.com`,
    },
    {
      name: "Linkedin",
      icon: Linkedin,
      info: "Lesliê Oliveira",
      href: "https://www.linkedin.com/in/leslie-aparecida-oliveira/",
    },
    {
      name: "Github",
      icon: Github,
      info: "@Naushikah",
      href: "https://github.com/naushikah",
    },
  ];

  return (
    <ContactPage>
      <SubHeaderDark />
      <Container>
        <Row className="mb-5 pb-3">
          <Col>
            <h1>Contato</h1>
          </Col>
        </Row>
        <RowStyled className="justify-content-center text-center">
          {icons.map(({ name, icon, info, href }) => (
            <Col
              key={name}
              md={2}
              className={"d-flex align-items-center flex-column mb-lg-5 pb-3"}
            >
              <NetworksIcon className={"mb-3"} image={icon} />
              <h2>{name}</h2>
              <a href={href} target="_blank" rel="noreferrer">
                <h3>{info}</h3>
              </a>
            </Col>
          ))}
        </RowStyled>
      </Container>
    </ContactPage>
  );
};

export default Contact;
