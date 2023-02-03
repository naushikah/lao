import { Container } from "react-bootstrap";
import { CarouselMousewheel } from "../../components";
import Profile from "./Profile";

const About = () => {
  const components = [{ name: "Profile", component: <Profile /> }];

  return (
    <>
      <Container style={{ marginTop: "80px" }}>
      </Container>
      <CarouselMousewheel slides={components} />
    </>
  );
};

export default About;
