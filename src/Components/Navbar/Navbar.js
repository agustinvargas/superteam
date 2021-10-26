import React, { useContext } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { TeamContext } from "../../Contexts/TeamContext";

export default function NavBar() {
  const { team } = useContext(TeamContext);
  return (
    <Navbar bg="light" expand="lg" className="px-3 px-lg-5">
      <Navbar.Brand translate="no">
        <Link
          style={{ fontFamily: `"Noto Sans", sans serif`, fontWeight: "700" }}
          exact
          to="/"
        >
          superTeam
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse
        id="navbarScroll"
        className="d-lg-flex justify-content-end"
      >
        <Nav className="mr-auto my-2 my-lg-0" navbarScroll>
          {!(team && team.length === 0) && (
            <>
              <Nav.Link as={Link} to="/equipo">
                Mi equipo
              </Nav.Link>
            </>
          )}
          <Nav.Link as={Link} to="/buscador">
            Buscador
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
