import { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

export default function SiteNav() {

  let theme = useContext(ThemeContext)

  console.log(theme)

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
            <NavLink className="nav-link" to="/about">
              About
            </NavLink>
            <Button variant="secondary" onClick={theme.handleTheme}>Change theme</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
