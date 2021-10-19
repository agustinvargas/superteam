import React, { useState } from "react";
import { createContext } from "react";

export const UserContext = createContext([]);

export const UserProvider = ({ children }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <UserContext.Provider
      value={{
        email,
        password,
        setEmail,
        setPassword,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
