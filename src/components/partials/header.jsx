import { Nav, NavDropdown, Navbar, Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Link } from "react-router-dom";
import LogoATP from "../images/ATPLogo.png"


const Header = () => {
    return (
      <>
        <header className="header">
          <Navbar className="nav" collapseOnSelect expand="md" variant="dark">
            <Container>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link>
                        <Navbar.Brand >
                            <Link to="/">
                                <img href="" className="imgHeader" src={LogoATP} alt="LogoATP"/>
                            </Link>    
                        </Navbar.Brand>
                    </Nav.Link>
                </Nav>
                <Nav>  
                    <NavDropdown
                    title="MY ACCOUNT"
                    id="collasible-nav-dropdown"
                    style={{ color: "#fff" }}
                  >
                    <NavDropdown.Item href="/users/login">
                      Login
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/users/register">
                      Register
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
             
              <Nav.Link href="socialMedia" style={{ color: "#fff" }}>
                <FacebookIcon className="linkNav"></FacebookIcon>
                <InstagramIcon className="linkNav"></InstagramIcon>
                <TwitterIcon className="linkNav"></TwitterIcon>
                <YouTubeIcon className="linkNav"></YouTubeIcon>
              </Nav.Link> 
              </Navbar.Collapse>
            </Container>
          </Navbar>
          
        <Navbar className="subNavBar" variant="dark">
          <Container>
            <Nav className="me-auto">
                <Nav.Link href="players"  style={{ color: "#fff" }}>
                    <Button variant="outline-dark">PLAYERS</Button>
                </Nav.Link>
                <Nav.Link href="tournaments" style={{ color: "#fff" }}>
                   <Button variant="outline-dark">TOURNAMENTS</Button>
                </Nav.Link>
                <Nav.Link href="news" style={{ color: "#fff" }}>
                  <Button variant="outline-dark">NEWS</Button>
                </Nav.Link>
              </Nav>
            </Container>
        </Navbar>
        </header>
      </>
    );
  };

export default Header;