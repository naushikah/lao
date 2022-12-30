import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Container style={{marginTop: '150px'}}>
      <Link to="/">Home</Link>
    </Container>
  );
};

export default NotFound;
