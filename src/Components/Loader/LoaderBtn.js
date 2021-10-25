import React from "react";
import { Button, Spinner } from "react-bootstrap";

export default function LoaderBtn({ text }) {
  return (
    <Button className="w-100" variant="primary" disabled>
      <Spinner
        as="span"
        animation="grow"
        size="sm"
        role="status"
        aria-hidden="true"
      />
      {text}
    </Button>
  );
}
