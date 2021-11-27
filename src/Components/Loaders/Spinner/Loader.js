import React from "react";
import { Spinner } from "react-bootstrap";

// probar positon absolute
export default function Loader() {
  return (
    <div
      className="w-100 d-flex justify-content-center align-items-center"
      style={{ height: "75vh" }}
    >
      <Spinner animation="border" variant="primary" />
    </div>
  );
}
