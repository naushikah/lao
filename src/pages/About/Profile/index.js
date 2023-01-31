import { Col } from "react-bootstrap";
import {
  Image,
  RowStyled as Row,
  ContainerStyled as Container,
  DarkBackground,
} from "./styles";
import { Profile as ProfileIcon } from "../../../assets/icons";
import { Content } from "../../../components";

const Profile = () => {
  const subtitles = [
    {
      title: "Olá",
    },
    { title: "Meu nome é" },
  ];

  return (
    <>
      <Container style={{ height: "90vh" }}>
        <DarkBackground />
        <Row>
          <Col lg={{ span: 4, offset: 2 }}>
            <Image src={ProfileIcon} />
          </Col>
          <Col>
            <Content subtitles={subtitles} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Profile;
