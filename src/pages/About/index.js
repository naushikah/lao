import { Container } from "react-bootstrap";
// import { Link } from "react-router-dom";
import { CarouselMousewheel } from "../../components";
import Profile from "./Profile";

const About = () => {
  const components = [{ name: "Profile", component: <Profile /> }];

  return (
    <>
      <Container style={{ marginTop: "80px" }}>
        {/* <Link to="/">Home</Link> */}
      </Container>
      <CarouselMousewheel slides={components} />
    </>
  );
};

export default About;
