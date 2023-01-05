import React, { useState, createContext, useMemo, useEffect } from "react";

const UserContext = createContext();

function UserProvider({ children }) {
  const [usersData, setUsersData] = useState([]);
  const [currentUserData, setCurrentUserData] = useState({});

  const value = useMemo(
    () => ({
      usersData,
      setUsersData,
      currentUserData,
      setCurrentUserData,
    }),
    [usersData, setUsersData, currentUserData, setCurrentUserData]
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export { UserContext, UserProvider };
