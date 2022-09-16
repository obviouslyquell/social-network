import styles from './Users.module.scss'
import Header from '../../components/Header/Header'
import { useEffect, useState } from 'react'
import axios from 'axios'
import UserCard from '../../components/UserCard/UserCard'
import classNames from 'classnames'

function Users() {
    const [users, setUsers] = useState([])
    

    const usersClassnames = classNames(styles.container, styles.users)
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users').then(res=>setUsers(res.data)) // нужен await?
    }, [])
  return (
    <>
        <Header />
        <section>
            <div className={usersClassnames}>
                {users.map((e) => <UserCard key={e.id} data={e}/>)}
            </div>
        </section>
        
    </>
  )
}

export default Users