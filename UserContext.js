import React, { createContext, useState } from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [authToken, setAuthToken] = useState(null);
  const [userName, setUserName] = useState("");

  return (
    <UserContext.Provider
      value={{
        authToken,
        setAuthToken,
        userName,
        setUserName,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}