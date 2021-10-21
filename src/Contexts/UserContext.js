import React, { useState } from "react";
import { createContext } from "react";

export const UserContext = createContext([]);

export const UserProvider = ({ children }) => {
  const [searchResults, setSearchResults] = useState("");
  const [login, setLogin] = useState(false);

  return (
    <UserContext.Provider
      value={{
        searchResults,
        setSearchResults,
        login,
        setLogin,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
