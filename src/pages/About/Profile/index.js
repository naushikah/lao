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
  const data = {
    primary: "Lesliê",
    secondary: "Aparecida Oliveira",
    subtitles: [
      {
        title: "Olá",
      },
      { title: "Meu nome é" },
    ],
  };

  return (
    <>
      <Container>
        <DarkBackground />
        <Row>
          <Col sm={7} lg={{ span: 5, offset: 2 }}>
            <Image src={ProfileIcon} />
          </Col>
          <Col>
            <Content data={data} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Profile;
