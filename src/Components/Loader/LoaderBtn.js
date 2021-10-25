import React from "react";
import { Button, Spinner } from "react-bootstrap";

export default function LoaderBtn() {
  return (
    <Button variant="primary" disabled>
      <Spinner
        as="span"
        animation="grow"
        size="sm"
        role="status"
        aria-hidden="true"
      />
      Buscando...
    </Button>
  );
}
