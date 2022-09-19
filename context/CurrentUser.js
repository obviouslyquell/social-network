import { createContext, useContext, useEffect, useState } from 'react';

const CurrentUserContext = createContext();

export function CurrentUserContextWrapper({ children }) {
  
  const [user, setUser] = useState({})
  const value = { user, setUser }

  return (
    <CurrentUserContext.Provider value={value}>
      {children}
    </CurrentUserContext.Provider>
  );
}

export function useCurrentUserContext() {
  return useContext(CurrentUserContext);
}