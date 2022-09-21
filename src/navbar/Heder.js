import { Nav, Navbar, Container, Button } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";

function Heder() {
  const naviget = useNavigate();

  return (
    <>
      <Navbar
        bg="dark"
        variant="dark"
        expand="lg"
        className=" sticky-top fixed-top"
      >
        <Container className="my-2">
          <Navbar.Brand as={NavLink} to={"/"}>
            MERN Stack Curd
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto mx-3">
              <Nav.Link as={NavLink} to={"/"}>
                Home
              </Nav.Link>
              <Nav.Link>About</Nav.Link>
            </Nav>
          </Navbar.Collapse>

          <Button
            onClick={() => naviget("form")}
            size="lg"
            className="px-5"
            variant="outline-light"
          >
            Add User
          </Button>
        </Container>
      </Navbar>
    </>
  );
}

export default Heder;
