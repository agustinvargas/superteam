import React, { createContext, useState } from "react";

export const NotifyContext = createContext();

export default function NotifyProvider({ children }) {
  const [notify, setNotify] = useState([]);

  const add = (header, body) => {
    setNotify([
      ...notify,
      {
        header,
        body,
        id: Date.now(),
      },
    ]);
  };

  const remove = (id) => {
    const filter = notify.filter((el) => el.id !== id);
    setNotify(filter);
  };

  const contextValue = {
    notify,
    setNotify,
    remove,
    add,
  };

  return (
    <NotifyContext.Provider value={contextValue}>
      {children}
    </NotifyContext.Provider>
  );
}
