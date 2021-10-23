import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <Navbar
      bg="light"
      expand="lg"
      className="px-3 px-lg-5 d-flex justify-content-between"
    >
      <Navbar.Brand translate="no">
        <Link exact to="/">
          SuperHeroes
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav className="mr-auto my-2 my-lg-0" navbarScroll>
          <Nav.Link as={Link} to="/team">
            HeroesTeam
          </Nav.Link>
          <Nav.Link as={Link} to="/search">
            Search
          </Nav.Link>
          <Nav.Link as={Link} to="/data">
            SearchGrid
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
