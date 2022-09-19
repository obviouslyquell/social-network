import axios from 'axios';
import { createContext, useContext, useEffect, useState } from 'react';
import { useCurrentUserContext } from './CurrentUser';

const UsersContext = createContext();

export function UsersContextWrapper({ children }) {
  const [users, setUsers] = useState()
  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/users').then(res=>setUsers(res.data))
}, [])
  return (
    <UsersContext.Provider value={users}>
      {children}
    </UsersContext.Provider>
  );
}

export function useUsersContext() {
  return useContext(UsersContext);
}