import React, { useState } from "react";
import { ToastContainer, Toast } from "react-bootstrap";

export default function Toasts({ header, body }) {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <ToastContainer className="p-3" position="bottom-center">
        <Toast bg="dark" onClose={() => setShow(false)} delay={3200} autohide>
          <Toast.Header closeButton={true}>
            <strong className="me-auto">{header}</strong>
          </Toast.Header>
          <Toast.Body className="text-white">{body}</Toast.Body>
        </Toast>
      </ToastContainer>
    );
  } else return null;
}
