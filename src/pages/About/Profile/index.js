import { Col, Container, Row } from "react-bootstrap";
import { ProfileContainer } from "./styles";
import { Image } from "./styles";
import { Profile as ProfileIcon } from "../../../assets/icons";

const Profile = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <ProfileContainer />
            <Image src={ProfileIcon} />
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
};

export default Profile;
