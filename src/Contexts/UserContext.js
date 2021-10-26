import React, { useState } from "react";
import { createContext } from "react";

export const UserContext = createContext([]);

export const UserProvider = ({ children }) => {
  // const [searchResults, setSearchResults] = useState("");
  const [search, setSearch] = useState({
    value: "",
    results: "",
  });
  const [login, setLogin] = useState(false);

  return (
    <UserContext.Provider
      value={{
        search,
        setSearch,
        login,
        setLogin,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
