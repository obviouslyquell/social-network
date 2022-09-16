import axios from 'axios';
import { createContext, useContext, useEffect, useState } from 'react';

const UserContext = createContext();

export function UserContextWrapper({ children }) {
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users').then(res=>setUsers(res.data))
    }, [])
  const [users, setUsers] = useState()

  return (
    <UserContext.Provider value={users}>
      {children}
    </UserContext.Provider>
  );
}

export function useUserContext() {
  return useContext(UserContext);
}