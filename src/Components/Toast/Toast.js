import React, { useContext } from "react";
import { ToastContainer, Toast } from "react-bootstrap";
import { TeamContext } from "../../Contexts/TeamContext";

export default function Toasts({ header, body }) {
  const { notif, setNotif } = useContext(TeamContext);

  if (notif) {
    return (
      <ToastContainer className="p-3 position-fixed" position="bottom-end">
        <Toast onClose={() => setNotif(false)} delay="3750" autohide>
          <Toast.Header closeButton={true}>
            <strong className="me-auto">{header}</strong>
          </Toast.Header>
          <Toast.Body>{body}</Toast.Body>
        </Toast>
      </ToastContainer>
    );
  } else return null;
}
