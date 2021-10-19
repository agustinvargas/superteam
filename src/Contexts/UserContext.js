import React, { useState } from "react";
import { createContext } from "react";

export const UserContext = createContext([]);

export const UserProvider = ({ children }) => {
  const [searchResults, setSearchResults] = useState("");

  return (
    <UserContext.Provider
      value={{
        searchResults,
        setSearchResults,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
