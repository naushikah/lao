import { Link } from "react-router-dom";
import { 
  BackgroundDark,
} from "./styles";

const Home = () => {
  return (
    <>
      <BackgroundDark/>
      <Link to="/page2" className="App-link">
          Next Page
      </Link>
    </>
  );
};

export default Home;
