import { LogoSmall } from "../../assets/images";
import {
  NavbarStyled,
  NavStyled as Nav,
  ImageStyled as Image,
  NavbarContainer,
} from "./styles";

const Navbar = () => {
  const pathname = window.location.pathname;

  console.log(`pathname: ${pathname}`);

  return (
    <NavbarStyled>
      <NavbarContainer
        className={`${pathname === "/" ? "d-lg-none" : "d-lg-flex"} d-none`}
      >
        <NavbarStyled.Brand href="/">
          <Image src={LogoSmall} />
        </NavbarStyled.Brand>
        <Nav>
          <Nav.Link href="/">início</Nav.Link>
          <Nav.Link
            href="/projetos"
            className={`${pathname === "/projetos" && "active"}`}
          >
            projetos
          </Nav.Link>
          <Nav.Link
            href="/sobre"
            className={`${pathname === "/sobre" && "active"}`}
          >
            sobre
          </Nav.Link>
          <Nav.Link
            href="/contato"
            className={`${pathname === "/contato" && "active"}`}
          >
            contato
          </Nav.Link>
        </Nav>
      </NavbarContainer>
    </NavbarStyled>
  );
};

export default Navbar;
