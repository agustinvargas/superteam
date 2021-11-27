import React from "react";
import { Toast } from "react-bootstrap";
import useNotify from "../../../Hooks/useNotify";

export default function Toasts({ header, body, id }) {
  const notification = useNotify();
  const handleClose = (id) => {
    notification.remove(id);
  };

  return (
    <Toast onClose={() => handleClose(id)} delay={3000} autohide>
      <Toast.Header>
        <strong className="me-auto">{header}</strong>
      </Toast.Header>
      <Toast.Body>{body}</Toast.Body>
    </Toast>
  );
}
