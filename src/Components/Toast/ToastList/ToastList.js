import React, { useState, useEffect } from "react";
import { ToastContainer } from "react-bootstrap";
import useNotify from "../../../Hooks/useNotify";
import Toasts from "../ToastNotify/Toast";

export default function ToastList() {
  const { notify } = useNotify();
  const [list, setList] = useState(notify);

  useEffect(() => {
    setList(notify);
  }, [notify, list]);

  if (notify.length) {
    return (
      <ToastContainer className="p-3 position-fixed" position="bottom-end">
        {list.map((el, i) => (
          <Toasts key={i} id={el.id} header={el.header} body={el.body}></Toasts>
        ))}
      </ToastContainer>
    );
  }

  return null;
}
