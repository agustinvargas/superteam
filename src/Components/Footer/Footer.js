import React from "react";
import { Container } from "react-bootstrap";

export default function Footer() {
  return (
    <Container fluid className="text-center py-3">
      <small>
        Desarrollado por{" "}
        <a href="https://github.com/agustinvargas" target="__blank">
          <strong>Agustín Vargas</strong>
        </a>
        <br />
        Alkemy Challenge (React.js, Octubre 2021)
      </small>
    </Container>
  );
}
