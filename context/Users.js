import axios from 'axios';
import { createContext, useContext, useEffect, useState } from 'react';

const UsersContext = createContext();

export function UserContextWrapper({ children }) {
  
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

export function useUserContext() {
  return useContext(UsersContext);
}