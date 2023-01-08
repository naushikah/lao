import { Link, useLocation } from "react-router-dom";
import { LogoSmall } from "../../assets/images";
import {
  NavbarStyled,
  NavStyled as Nav,
  ImageStyled as Image,
  NavbarContainer,
} from "./styles";

const Navbar = () => {
  const pathname = useLocation().pathname;
  
  return (
    <NavbarStyled>
      <NavbarContainer
        className={`${pathname === "/" ? "d-lg-none" : "d-lg-flex"} d-none`}
      >
        <NavbarStyled.Brand href="/">
          <Image src={LogoSmall} />
        </NavbarStyled.Brand>
        <Nav>
          <Link to="/">início</Link>
          <Link
            to="/projetos"
            className={`${pathname === "/projetos" && "active"}`}
          >
            projetos
          </Link>
          <Link
            to="/sobre"
            className={`${pathname === "/sobre" && "active"}`}
          >
            sobre
          </Link>
          <Link
            to="/contato"
            className={`${pathname === "/contato" && "active"}`}
          >
            contato
          </Link>
        </Nav>
      </NavbarContainer>
    </NavbarStyled>
  );
};

export default Navbar;