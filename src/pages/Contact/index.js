import { Col, Container, Row } from "react-bootstrap";
// import { Link } from "react-router-dom";
import { SubHeaderDark } from "./styles";

const Contact = () => {
  return (
    <SubHeaderDark>
      <Container>
        <Row>
          <Col><h1>Contato</h1></Col>
        </Row>
        
        {/* <Link to="/">Home</Link> */}</Container>
    </SubHeaderDark>
  );
};

export default Contact;
